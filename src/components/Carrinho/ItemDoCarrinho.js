import React, { Component } from 'react'
import styled from 'styled-components'

const CardItemCarrinho = styled.div`
border-radius: 5px;
box-shadow: 1px 2px 1px 2px rgb(0 0 0 / 20%);
margin: 5px;
padding: 5px;
text-align: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #ACDAFF;
width: 400px;

button{
width: fit-content;
margin: 5px;
padding: 5px;
}

`


export class ItemDoCarrinho extends Component {
  render() {
    return (
      <CardItemCarrinho>
        <h3></h3> 
        <p>Quantidade: {this.props.quantidade}</p>
        <p>Item: {this.props.nome}</p>
        <p>Preço: {this.props.valor}</p>
        <button onClick={() => this.props.removerCarrinho}>Remover</button>
      </CardItemCarrinho>
    )
  }
}
