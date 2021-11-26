import React, { Component } from 'react';
import axios from 'axios'
import { converterData } from './converterData';
import styled from 'styled-components'


const CardDetalhesDoJob = styled.div`
font-family: Georgia, 'Times New Roman', Times, serif;
background-color: #ACDAFF;
border-radius: 15px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
color: #494949;
margin: 0px auto;
text-align: center;
`

const Botoes = styled.div`
font-family: Georgia, 'Times New Roman', Times, serif;
display: flex;
justify-content: space-around;
width: 400px;
margin: 10px;
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
}`


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
      const pagamento = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
        return <li key={pay}>{pay}</li>
    })
      return(
      
        <CardDetalhesDoJob>
          {this.state.job.title &&<h2>{this.state.job.title}</h2>}       
          {this.state.job.description &&<p>{this.state.job.description}</p>}
          {this.state.job.price && <p>Valor: R${this.state.job.price.toFixed(2)}</p>}
          {this.state.job.dueDate && <p>Prazo: {converterData(this.state.job.dueDate)}</p>}
          <p>Formas de Pagamento Aceitas:</p>
          {pagamento}
          <Botoes>
          <button onClick={() => this.props.mudarTela('serviços')}>Voltar pra lista</button>
          <button onClick={() => this.props.adicionarAoCarrinho(this.state.job)}>Adicionar ao carrinho</button>
          </Botoes>
        </CardDetalhesDoJob>
        
      )
    }
  }