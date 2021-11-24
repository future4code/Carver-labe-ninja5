import React, { Component } from 'react'

export class DetalheServiço extends Component {
  render() {
    return (
      <div>
        <h3>Tela Detalhes do Serviço</h3>
        <p>Titulo</p>
        <p>Descricao</p>
        <p>Valor</p>
        <p>Prazo</p>
        <button>Voltar pra lista</button>
        <button>Adicionar no carrinho</button>
      </div>
    )
  }
}