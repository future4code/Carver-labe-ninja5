import React, { Component } from 'react'

export class CardServiços extends Component {
  render() {
    return (
      <div>
        <h3>Card com o serviço castrado</h3> 
        <p>Título</p>
        <p>Preço</p>
        <p>Prazo</p>
        <button>Ver detalhes</button>
        <button>Adicionar ao carrinho</button>
      </div>
    )
  }
}