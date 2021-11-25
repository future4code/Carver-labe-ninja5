import React, { Component } from 'react';
import axios from 'axios';

export class CardServiços extends Component {

  render() {
      return(
        <div>
          <h4>{this.props.job.title}</h4>
          <p><strong>Preço:</strong> R${this.props.job.price}</p>
          <p><strong>Prazo:</strong> {this.props.job.dueDate}</p>
          <button>Ver detalhes</button>
          <button>Adicionar ao carrinho</button>
        </div>
      )}

}