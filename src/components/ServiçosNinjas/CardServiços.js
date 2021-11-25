import React, { Component } from 'react';
import axios from 'axios';

export class CardServiços extends Component {
  state = {
    jobs: [],
  }

  componentDidMount(){
    this.getAllJobs()
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization: "9a8a7b0c-9eba-4b46-9e82-f1ea4bf6f468"
      }
    })
    .then((res) => {
      this.setState({jobs: res.data.jobs})
    })
    .catch((err) => {
      alert(`Algo errado não está certo: \n${err.response.data.message} ` )
    })
  }
  
  render() {
    const listaJobs = this.state.jobs.map((item) =>{
      return(
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p><strong>Preço:</strong> R${item.price}`</p>
          <p><strong>Prazo:</strong> {item.dueDate}</p>
          <button>Ver detalhes</button>
          <button>Adicionar ao carrinho</button>

        </div>
      )
    }) 
    return (
      <div>
        {/* <h3>Card com o serviço castrado</h3> 
        <p>Título</p>
        <p>Preço</p>
        <p>Prazo</p>
        <button>Ver detalhes</button>
        <button>Adicionar ao carrinho</button> */}
        {listaJobs}
      </div>
    )
  }
}