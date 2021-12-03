import React, { Component } from 'react'
import styled from 'styled-components'
import logoLabeninjas from '../img/labeninjas.png'


const CardHome = styled.div`
  border: solid #acdaff;
  background-color: #acdaff;
  border-radius: 15px;
  margin-top: 5vh;
  border-width: 2vw 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 0px auto;

  @media screen and (max-device-width : 480px) {
    width: 80vw;
    margin: 0px auto;
  }

p{
  display: flex;
  justify-content: space-around;
}
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
const Botao = styled.div`
width: 300px;
display: flex;
justify-content: space-evenly;
`

export class HomePage extends Component {
  render() {
    return (
        <CardHome>
          <img src={logoLabeninjas} />
          <Botao>
            <button onClick={() => this.props.mudarTela('cadastro')}>Quero ser Ninja</button>
            <button onClick={() => this.props.mudarTela('serviços')}>Contratar Ninja</button>
          </Botao>
        </CardHome>
    )
  }
}