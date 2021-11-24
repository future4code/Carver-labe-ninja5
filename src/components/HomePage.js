import React, { Component } from 'react'
import styled from 'styled-components'
import logoLabeninjas from './imagemLogo/labeninjas.png'


const Botao = styled.button`

  background-color: #a873e8;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

:hover {

  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

`

const DivBody = styled.div`

background-color: #eef491;
display: flex;
flex-direction: column;
align-items: center;

button{

  background-color: #a873e8;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

}

button:hover{

  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}

`

export class HomePage extends Component {
  render() {
    return (
      <DivBody>
        {/* <h3>Tela Inicial</h3> */}
        <img src={logoLabeninjas}/>
        <p>
        <button>Quero ser um ninja</button>
        <button>Quero encontrar um ninja</button>
        </p>
      </DivBody>
    )
  }
}