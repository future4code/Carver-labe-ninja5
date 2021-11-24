import React, { Component } from 'react'
import { CardServiços } from './CardServiços'

export class Serviços extends Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaProduto: "",
    ordem: ""
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

      <div>
        <input
          placeholder='Valor Min'
        // value={}
        // onChange={}
        />
        <input
          placeholder='Valor Max'
        // value={}
        // onChange={}
        />
        <input
          placeholder='Busca por serviço ou descrição'
        // value={}
        // onChange={}
        />
        <select>
          <option> Sem ordenação </option>
          <option> Valor Mínimo </option>
          <option> Valor Máximo </option>
          <option> Título </option>
          <option> Prazo </option>
        </select>
        <CardServiços />
      </div>
    )
  }
}