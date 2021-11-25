import React, { Component } from 'react';
import axios from 'axios';
import { converterData } from '../converterData';
import styled from 'styled-components'

const CardJobs = styled.div`
background-color:#ACDAFF;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
`
const Botoes = styled.div`
display: flex;
justify-content: space-around;
width: 250px;
padding: 8px;
margin: 3px;
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