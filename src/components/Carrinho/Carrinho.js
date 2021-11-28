import React, { Component } from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'
import styled from 'styled-components'
import imagem from '../Carrinho/shoppingcart.png'

export const CardCarrinho = styled.div`
color: #494949;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 10px;
padding: 5px;
border-radius: 3px;
text-align: center;
h3{
  align-self: center;
}
img{
  width: 200px;
}
`

const Botao = styled.div`
display: flex;
justify-content: space-around;
margin: 0 auto;
align-items: center;
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

export class Carrinho extends Component {


  render() {

    const itensDoCarrinho = this.props.carrinho.map((item) => {
      return <ItemDoCarrinho key={item.id} title={item.title} price={item.price} id={item.id} removerDoCarrinho={this.props.removerDoCarrinho} />
    })

    let valorTotal = 0

    this.props.carrinho.forEach((item) => {
      valorTotal += item.price
    })



    return (
      <CardCarrinho>
        {itensDoCarrinho.length > 0 ? (
          <div>
            {itensDoCarrinho}
            <p>Total: R${valorTotal.toFixed(2)}</p>
            <Botao>
            <button onClick={() => this.props.limparCarrinho()}>Finalizar Compra</button >
            <button onClick={() => this.props.mudarTela('serviços')}>Voltar para a Lista</button >
            </Botao>
          </div>
        ) : (
          <div>
          <img src={imagem} fill='#A873E8'/>
          <h1>Carrinho Vazio</h1>
          </div>
        )
        } </CardCarrinho>
    )
  }
}


