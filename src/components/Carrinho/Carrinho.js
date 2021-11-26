import React, { Component } from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'
import styled from 'styled-components'
import Axios from 'axios'

export const CardCarrinho = styled.div`
color: #494949;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 10px;
padding: 5px;
border-radius: 3px;

h3{
  align-self: center;
}
`

export class Carrinho extends Component {
  state = {
    carrinho: [],
    valorTotal: 0,
  }

  componentDidMount() {
    this.produtosCarrinho()
  }

  produtosCarrinho = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    const headers = {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    }
    // const pathVariables = {
    //  jobs/:id, id: "efed9385-cf87-4f0e-a121-465384b3f2e4"
    // }
    Axios.get(url, headers)
      .then((res) => {
        this.setState({
          carrinho: res.jobs,
        })
      })
      .catch((err) => console.log(err.response));
  }

  // const itensCarrinho = this.state.carrinho.map((item) => { (dentro render)
  render() {

    return (
      <CardCarrinho>
        <ItemDoCarrinho key={ItemDoCarrinho.id}/>
        <p>Valor Total: R${this.props.valorTotal},00  <Botao onClick={() => alert('Compra Finalizada!')}> Finalizar Compra </Botao> <Botao onClick={() => this.props.mudarTela('serviços')}> Voltar para Lista </Botao> </p>
      </CardCarrinho>
    )
  }
}


const Botao = styled.button`
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
button:hover{
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`