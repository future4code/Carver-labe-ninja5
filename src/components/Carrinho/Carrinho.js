import React, { Component } from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'
import styled from 'styled-components'

export const CardCarrinho = styled.div`
color: #494949;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 10px;
padding: 5px;
border-radius: 3px;

h3{
  align-self: center;
}
`



export class Carrinho extends Component {
  render() {
  // const ItemDentroCarrinho = listaProdutos.map(item => {

  // })


    return (
      <CardCarrinho>
        <h3></h3> 
        <ItemDoCarrinho/>
        <p>Valor Total: R${this.props.valorTotal},00  <button onClick={() => alert('Compra Finalizada!')}> Finalizar Compra </button> <button onClick={() => this.props.mudarTela('serviços')}> Voltar para Lista </button> </p>
        
      </CardCarrinho>
    )
  }
}