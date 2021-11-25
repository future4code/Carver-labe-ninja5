import React, { Component } from 'react'
import { CardServiços } from './CardServiços'
import styled from 'styled-components'

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

export class Serviços extends Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    busca: "",
    ordem: "",
    listaDeServiços: []
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
        {this.state.listaDeServiços
        .filter(job => {
          return job.title.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(job => {
          return this.state.valorMinimo === "" || job.price >= this.state.valorMinimo
        })
        .filter(job => {
          return this.state.valorMaximo === "" || job.price <= this.state.valorMaximo
        })}
        <CardServiços />
        </CardsContainer>
      </ServiçosBody>
    )
  }
}