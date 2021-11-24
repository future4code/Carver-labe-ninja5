import React, { Component } from 'react'
import styled from 'styled-components'
import logoTwitter from '../img/logoTwitter.png'
import logoFacebook from '../img/logoFacebook.png'
import logoInstagram from '../img/logoInstagram.png'



const EstiloFooter = styled.div`

background-color: #a873e8;
height: 89px;
position: relative;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;


img{
  height: 65px;
}


`

export class Footer extends Component {
  render() {
    return (
      <EstiloFooter>
        <a href='https://www.facebook.com' target="_blank"><img src={logoFacebook} alt='Logo do Facebook'/></a>
        <a href='https://www.twitter.com' target="_blank"><img src={logoTwitter} alt='Logo do Twitter'/></a>
        <a href='https://www.instagram.com' target="_blank"><img src={logoInstagram} alt='Logo do Instagram' /></a>
      </EstiloFooter>
    )
  }
}