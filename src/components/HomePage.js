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