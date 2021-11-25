import React, { Component } from 'react'
import styled from 'styled-components'
import logoLabeninjas from '../img/labeninjas.png'


const EstiloBody = styled.div`

background-color: #eef491;
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;



p{
  display: flex;
  justify-content: space-around;
}

div{

  border: solid #acdaff;
  background-color: #acdaff;
  margin-top: 5vh;
  border-width: 2vw 5vw;

}

`

export class HomePage extends Component {
  render() {
    return (
      <EstiloBody>
        <div>
          <img src={logoLabeninjas} />
          <p>
            <button onClick={() => this.props.mudarTela('cadastro')}>Quero ser um ninja</button>
            <button onClick={() => this.props.mudarTela('serviços')}>Quero encontrar um ninja</button>
          </p>
        </div>
      </EstiloBody>
    )
  }
}