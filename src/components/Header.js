import React, { Component } from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
background-color: #A873E8;
display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;
height: 80px;
img{
  width: 80px;
}
` 
const HeaderBotao = styled.div`
display: flex;
justify-content: space-around;
width: 200px;
background-color: #A873E8;
`
export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <img src={logo}/>
        <HeaderBotao>
        <button onClick={() => this.props.mudarTela('inicial')}>Página Inicial</button>
        <button onClick={() => this.props.mudarTela ('carrinho')}>Carrinho</button>
        </HeaderBotao>
      </HeaderContainer>
    )
  }
}