import React, { Component } from 'react';
import axios from 'axios'
export class DetalheServiço extends Component {
  state = {
    job: {},
    id: ""
  }

  getJobById = ({id}) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.get(url, {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    })
    .then((res) => {
      console.log(res)
      this.setState({job: res.data})
    })
    .catch((err) => {
      alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.response.data.message} ` )
    })
  }

  

  render() {
    
    return (
      <div>
        <h3>Tela Detalhes do Serviço</h3>
        <p>Titulo</p>
        <p>Descricao</p>
        <p>Valor</p>
        <p>Prazo</p>
        <button>Voltar pra lista</button>
        <button>Adicionar no carrinho</button>
      </div>
    )
  }
}