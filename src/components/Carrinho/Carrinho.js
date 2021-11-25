import React, { Component } from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'
import styled from 'styled-components'

export const CardCarrinho = styled.div`
color: #494949;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px;
padding: 5px;
border-radius: 3px;
background-color: #ACDAFF;
`

export class Carrinho extends Component {
  render() {
    return (
      <CardCarrinho>
        <h3>Tela do Carrinho</h3> 
        <ItemDoCarrinho/>
        <p>Valor Total: R${this.props.valorTotal},00</p>
        <button>Contratar</button>
      </CardCarrinho>
    )
  }
}