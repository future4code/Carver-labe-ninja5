import React, { Component } from 'react';
import axios from 'axios'
import { converterData } from './converterData';

export class DetalheServiço extends Component {
  state = {
    job: {},
  }

  // componentDidMount(){
  //   this.getJobById()
  // }



  // getJobById = () => {
  //   const id = this.props.id
  //   const url = `https://labeninjas.herokuapp.com/jobs/${id}`
  //   axios.get(url, {
  //     headers: {
  //       Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res)
  //     this.setState({job: res.data})
  //   })
  //   .catch((err) => {
  //     alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.response.data.message} ` )
  //   })
  // }

  

  // render() {
  //   const pagamento = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
  //     return <li key={pay}>{pay}</li>
  // })
  //   return (
  //     <div key= {job.id} >
  //       <h2>{this.props.job.title}</h2>       
  //       <p>{this.props.job.description}</p>
  //       <p>Valor: R${this.props.job.price.toFixed(2)}</p>
  //       <p>Prazo: {converterData(this.props.job.dueDate)}</p>
  //       <p>formas de Pagamento Aceitas:</p>
  //       {pagamento}
  //       <button>Voltar pra lista</button>
  //       <button>Adicionar no carrinho</button>
  //     </div>
  //   )
  // }
}