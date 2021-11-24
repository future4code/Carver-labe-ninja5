import React, { Component } from 'react'
import logo from '../img/logo-transparente.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
align-items: center;
img{
  width: 80px;
}
` 
const HeaderBotao = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
`
export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <img src={logo}/>
        <HeaderBotao>
          {/* Falta colocar o onClick pra troca de tela */}
        <button onClick={() => this.props.mudarTela('inicial')}>Página Inicial</button>
        <button onClick={() => this.props.mudarTela ('carrinho')}>Carrinho</button>
        </HeaderBotao>
      </HeaderContainer>
    )
  }
}