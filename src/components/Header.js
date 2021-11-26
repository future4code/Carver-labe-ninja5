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
font-family: Georgia, 'Times New Roman', Times, serif;
img{
  margin-left: 50px;
  width: 80px;
}
button{
font-family: Georgia, 'Times New Roman', Times, serif;
background-color: #acdaff;
border-radius: 20px;
border: none;
color: #494949;
padding: 7px;
text-align: center;
text-decoration: none;
font-size: 15px;
cursor: pointer;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
}
button:hover{
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
` 
const HeaderBotao = styled.div`
display: flex;
justify-content: space-around;
width: 200px;
background-color: #A873E8;
margin-right: 50px;
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