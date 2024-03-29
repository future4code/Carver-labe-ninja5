import React, { Component } from 'react'
import { CardServiços } from './CardServiços'
import styled from 'styled-components'
import axios from 'axios'

const ServiçosBody = styled.div`
background-color: #eef491;
`
const FiltroContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
color: #494949;

@media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

input, select{
  margin-top: 30px;
  border: 2px solid;
  border-color: #A873E8;
  border-radius: 20px;
  margin-left: 60px;
  width: 200px;

@media screen and (max-device-width : 480px){
    margin-top: 2vh;
    width: 65vw;
    align-self: center;
    margin-left: 0
  }
  
}
`
const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 10px;

@media screen and (max-device-width : 480px){
  display: flex;
  flex-direction: column;
  justify-content: center;

}
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
    this.setState({ busca: event.target.value })

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
        type="number"
        placeholder='Valor Mínimo'
        value={this.state.valorMinimo}
        onChange={this.atualizaValorMinimo}
        />
        <input
        type="number"
        placeholder='Valor Máximo'
        value={this.state.valorMaximo}
        onChange={this.atualizaValorMaximo}
        />
        <input
        type="text"
        placeholder='Busca por título ou descrição'
        value={this.state.busca}
        onChange={this.atualizaBusca}
        />
        <select
        name="sort"
        value={this.state.ordem}
        onChange={this.atualizaOrdem}>
          <option> Sem ordenação </option>
          <option> Menor Valor </option>
          <option> Maior Valor </option>
          <option> Título </option>
          <option> Prazo </option>
        </select>

        </FiltroContainer>
        <CardsContainer>
        {this.state.jobs
        .filter((job)=>{
          return job.title.toLowerCase().includes(this.state.busca.toLowerCase()) || 
        job.description.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter((job)=>{
          return this.state.valorMinimo === "" || job.price >= this.state.valorMinimo
        })
        .filter(job => {
          return this.state.valorMaximo === "" || job.price <= this.state.valorMaximo
        })
        .sort((a, b) => {
          switch (this.state.ordem){
            case "Menor Valor":
              return a.price - b.price
            case "Maior Valor":
              return b.price - a.price
            case "Título":
              return a.title.localeCompare(b.title)
            case "Prazo":
              return a.dueDate.localeCompare(b.dueDate)
          }
        })
        .map((job) => {
          return <CardServiços key={job.id} job={job} irPraTelaDetalhes={this.props.irPraTelaDetalhes} adicionarAoCarrinho={this.props.adicionarAoCarrinho}/>
        })
      }
        </CardsContainer>
      </ServiçosBody>
    )
  }
}