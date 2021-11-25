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
      <div>
        footer
      </div>

    )
  }
}