import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';


const CardContainer = styled.div`
    background-color: #ACDAFF;
    width: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column; 
    color: #A873E8;
    margin-top: 5vh;
    margin-left: 40vw;
    border-width: 2vw 10vw;
  
  h2{
    display: flex;
    justify-content: center;
  }
     
`
const Form = styled.input`
  border: none;
  border: 2px solid;
  border-color: #A873E8;
  padding:5px;
  margin: 10px 0;
  border-radius: 20px;
  height: 40px;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
`

const Button = styled.button`
    width: 50%;
    justify-content: center;
    display: flex;
    margin: 0 auto;
`



// const paymentMethodsList = [
//   "Cartão de Crédito",
//   "Cartão de Débito",
//   "Pix",
//   "PayPal",
//   "Boleto"
// ]

export class CadastroNinja extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: ""
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  onChangePrice = (event) => {
    this.setState({ price: event.target.value })
  }

  onChangePaymentMethods = (event) => {
    let value = Array.from(event.target.selectedOptions, option => option.value)
    this.setState({ paymentMethods: value })
  }

  onChangeDueDate = (event) => {
    this.setState({ dueDate: event.target.value })
  }

  crateJob = () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    };
    const baseUrl = "https://labeninjas.herokuapp.com";
    const headers = {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    }
    Axios
      .post(`${baseUrl}/jobs`, body, headers)
      .then((res) => {
        alert(`O job ${this.state.title} foi criado com sucesso!`)
        this.setState({
          title: "",
          description: "",
          price: "",
          paymentMethods: [],
          dueDate: ""
        });

      })
      .catch((erro) => {
        alert(`Erro ao cadastrar o job: ${erro.response.data.message}`);
      });
  };

  render() {
    return (
      <CardContainer>
        <h2>Quero ser um ninja!</h2>
        <Form
          placeholder="Título*"
          label="Serviço"
          name="title"
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <Form
          placeholder="Descrição*"
          label="Descrição"
          name="description"
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
        <Form
          type="number"
          label="Valor"
          placeholder="Valor R$*"
          name="price"
          value={this.state.price}
          onChange={this.onChangePrice}
        />
        <em>Formas De Pagamento:</em>
        <select multiple={true} type="file" value={this.state.paymentMethods} onChange={this.onChangePaymentMethods}>
          <option>Cartão de Débito</option>
          <option>Cartão de Crédito</option>
          <option>PayPal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>
        <em>Disponibilidade:</em>
        <Form
          placeholder="Prazo do Job"
          label="Prazo"
          name="dueDate"
          type="date"
          value={this.state.dueDate}
          onChange={this.onChangeDueDate}
        />
        <Button onClick={this.crateJob}>
          Cadastrar
        </Button>
      </CardContainer>
    )
  }
}