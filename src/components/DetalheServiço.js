import React, { Component } from 'react';
import axios from 'axios'
import { converterData } from './converterData';

export class DetalheServiço extends Component {
  state = {
    job: {},
  }

  componentDidMount(){
    this.getJobById()
  }



  getJobById = () => {
    const id = this.props.jobId
    const baseUrl = "https://labeninjas.herokuapp.com";
    const headers = {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    }
    axios.get(`${baseUrl}/jobs/${id}`, headers)
    .then((res) => {
      console.log(res)
      this.setState({job: res.data})
    })
    .catch((err) => {
      alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.response.data.message} ` )
    })
  }

  

  render() {
    // const jobAtual = this.state.job.map((job) => {
      const pagamento = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
        return <li key={pay}>{pay}</li>
    })
      return(
        <div>
          {this.state.job.title &&<h2>{this.state.job.title}</h2>}       
          {this.state.job.description &&<p>{this.state.job.description}</p>}
          {this.state.job.price && <p>Valor: R${this.state.job.price.toFixed(2)}</p>}
          {this.state.job.dueDate && <p>Prazo: {converterData(this.state.job.dueDate)}</p>}
          <p>Formas de Pagamento Aceitas:</p>
          {pagamento}
          <button onClick={() => this.props.mudarTela('serviços')}>Voltar pra lista</button>
          <button>Adicionar no carrinho</button>
        </div>
      )
    }
   
    // return (
    //   {jobAtual}
    // )
  }