import React, { Component } from 'react'
import styled from 'styled-components'

const CardItemCarrinho = styled.div`
border-radius: 5px;
box-shadow: 1px 2px 1px 2px rgb(0 0 0 / 20%);
margin: 5px;
padding: 10px;
text-align: center;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #ACDAFF;
width: 400px;

@media screen and (max-device-width : 480px){
  width: 80vw;
  margin: 2vw auto;

}

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
}
`


export class ItemDoCarrinho extends Component {
  render() {
    return (
      <CardItemCarrinho> 
        <p>{this.props.title}</p>
        <p>R${this.props.price},00</p>
        <button onClick={() => this.props.removerDoCarrinho(this.props.id)}>Remover</button>
      </CardItemCarrinho>
    )
  }
}
