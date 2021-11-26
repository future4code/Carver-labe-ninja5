import React, { Component } from 'react';
import axios from 'axios';
import { converterData } from '../converterData';
import styled from 'styled-components'

const CardJobs = styled.div`
background-color:#ACDAFF;

border-radius: 20px;

display: flex;
flex-direction: column;
align-items: center;
margin: 10px;

color: #494949;

`
const Botoes = styled.div`
display: flex;
justify-content: space-around;
width: 250px;

margin: 10px;
button{
background-color: #A873E8;
border-radius: 20px;
border: none;
color: #494949;
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

export class CardServiços extends Component {

  render() {
      return(
        <CardJobs>
          <h4>{this.props.job.title}</h4>
          <p><strong>Preço:</strong> R${this.props.job.price.toFixed(2)}</p>
          <p><strong>Prazo:</strong> {converterData(this.props.job.dueDate)}</p>
          <Botoes>

          <button onClick={() => this.props.irPraTelaDetalhes(this.props.job.id)}>Ver detalhes</button>

          <button>Adicionar ao carrinho</button>
          </Botoes>
        </CardJobs>
      )}
}