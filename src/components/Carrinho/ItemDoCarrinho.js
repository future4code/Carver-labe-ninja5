import React, { Component } from 'react'
import styled from 'styled-components'

const CardItemCarrinho = styled.div`
border-radius: 5px;
box-shadow: 1px 2px 1px 2px rgb(0 0 0 / 20%);
margin: 5px;
padding: 10px;
text-align: center;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #ACDAFF;
width: 400px;


button{
background-color: #A873E8;
border-radius: 20px;
border: none;
color: white;
padding: 7px;
text-align: center;
text-decoration: none;
font-size: 12px;
cursor: pointer;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
}
button:hover{
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`


export class ItemDoCarrinho extends Component {
  render() {
    return (
      <CardItemCarrinho> 
        <p>Quantidade: {this.props.quantidade}</p>
        <p>Item: {this.props.nome}</p>
        <p>Preço: {this.props.valor}</p>
        <button onClick={() => this.props.removerCarrinho}>Remover</button>
      </CardItemCarrinho>
    )
  }
}
