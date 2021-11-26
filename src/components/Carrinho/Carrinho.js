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

    const itensDoCarrinho = this.props.carrinho.map((item) => {
      return <ItemDoCarrinho key={item.id} title={item.title} price={item.price} id={item.id} removerDoCarrinho={this.props.removerDoCarrinho} />
    })

    // let totalPrice = 0

    // this.props.carrinho.forEach((item) => {
    //   totalPrice += item.price
    // })

    const valorTotalCarrinho = (carrinho) => {
      let valorTotal = 0;
      for (let job of carrinho) {
        valorTotal += job.price;
        console.log({valorTotal})
      }
      return valorTotal.toFixed(2);
  }


    return (
      <CardCarrinho>
        {itensDoCarrinho.length > 0 ? (
          <div>
            {itensDoCarrinho}
            <p>Total: R${valorTotalCarrinho}</p>
            
            <Botao onClick={() => this.props.limparCarrinho()}>Finalizar Compra</Botao>
            <Botao onClick={() => this.props.mudarTela('serviços')}>Voltar para a Lista</Botao>
          </div>
        ) : (
          <h1>Carrinho Vazio</h1>
        )
        } </CardCarrinho>
    )
  }
}


const Botao = styled.button`
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
button:hover{
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`