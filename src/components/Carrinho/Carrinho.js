import React, { Component } from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'

export class Carrinho extends Component {
  render() {
    return (
      <div>
        <h3>Tela do Carrinho</h3> 
        <ItemDoCarrinho/>
        <p>Valor Total: R$</p>
        <button>Contratar</button>
      </div>
    )
  }
}