import React, { Component } from 'react'
import styled from 'styled-components'


export class ItemDoCarrinho extends Component {
  render() {
    return (
      <div>
        <h3>Card com o serviço contratado</h3> 
        <p>Título</p>
        <p>Preço</p>
        <button>Remover</button>
      </div>
    )
  }
}

{/* Para trocar a tela pelos botões de seu componente use a funcao onClick={() => this.props.mudarTela('nome da tela')}*/}