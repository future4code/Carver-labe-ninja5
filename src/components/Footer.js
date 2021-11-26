import React, { Component } from 'react'
import styled from 'styled-components'
import twitter from '../img/twitter.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'




const EstiloFooter = styled.div`

background-color: #a873e8;
height: 6.1vh;
position: relative;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;


img{
  height: 5vh;
}

`

export class Footer extends Component {
  render() {
    return (
      <EstiloFooter>
        <a href="https://www.twitter.com" target="_blank"> <img src={twitter} /> </a>
        <a href="https://www.instagram.com" target="_blank"> <img src={instagram} /> </a>
        <a href="https://www.facebook.com" target="_blank"><img src={facebook} /> </a>
      </EstiloFooter>
    )
  }
}