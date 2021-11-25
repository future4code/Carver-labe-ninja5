import React, { Component } from 'react'
import { CardServiços } from './CardServiços'
import styled from 'styled-components'
import axios from 'axios'

const ServiçosBody = styled.div`
background-color: #eef491;
height: 80vh;
`
const FiltroContainer = styled.div`
display: flex;
justify-content: space-evenly;
input, select{
  margin: 30px;
  width: 300px;
}
`
const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 300px);
gap: 10px;
margin: 30px;
`

export class ListaServiços extends Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    busca: "",
    ordem: "",
    jobs: []
  }
    
  componentDidMount(){
    this.getAllJobs()
  }

  atualizaValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }
  atualizaValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }
  atualizaBusca = (event) => {
    this.setState({ buscaProduto: event.target.value })

  }
  atualizaOrdem = (event) => {
    this.setState({ ordem: event.target.value })
  }


  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    })
    .then((res) => {
      console.log(res)
      this.setState({jobs: res.data.jobs})
    })
    .catch((err) => {
      alert(`Algo errado não está certo: \n${err.response.data.message} ` )
    })
  }

  render() {

    return (
      

      <ServiçosBody>

        <FiltroContainer>
        <input
        placeholder='Valor Mínimo'
        value={this.state.valorMinimo}
        onChange={this.atualizaValorMinimo}
        />
        <input
        placeholder='Valor Máximo'
        value={this.state.valorMaximo}
        onChange={this.atualizaValorMaximo}
        />
        <input
        placeholder='Busca por título ou descrição'
        value={this.state.busca}
        onChange={this.atualizaBusca}
        />
        <select>
          <option> Sem ordenação </option>
          <option> Menor Valor </option>
          <option> Maior Valor </option>
          <option> Título </option>
          <option> Prazo </option>
        </select>

        </FiltroContainer>
        <CardsContainer>
        {this.state.jobs.map((job) => {
          return <CardServiços job={job}/>})}
        
        {/* .filter(job => {
          return job.title.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(job => {
          return this.state.valorMinimo === "" || job.price >= this.state.valorMinimo
        })
        .filter(job => {
          return this.state.valorMaximo === "" || job.price <= this.state.valorMaximo
        })
      } */}

        </CardsContainer>
      </ServiçosBody>
    )
  }
}