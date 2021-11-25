import React, { Component } from 'react';
import axios from 'axios';
import { converterData } from '../converterData';

export class CardServiços extends Component {

  render() {
      return(
        <div>
          <h4>{this.props.job.title}</h4>
          <p><strong>Preço:</strong> R${this.props.job.price.toFixed(2)}</p>
          <p><strong>Prazo:</strong> {converterData(this.props.job.dueDate)}</p>
          <button onClick={() => this.props.mudarTela('detalhes')}>Ver detalhes</button>
          <button>Adicionar ao carrinho</button>
        </div>
      )}

}