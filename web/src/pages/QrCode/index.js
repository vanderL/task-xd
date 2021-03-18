import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import Qr from 'qrcode.react'

import * as S from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
    const [mac, setMac] = useState()
    const [redirect, setRedirect] = useState(false)

    async function SaveMac() {
      if(!mac) {
        alert('Informe o código que apareceu no celular')
      } else{
        await localStorage.setItem('@todo/macaddress', mac)
        setRedirect(true)
  
        window.location.reload()
      }

    }
    return (
      <S.Container>
        {redirect && <Redirect to='/' />}
        <Header />

        <S.Content>
          <h1>Capture o qrcode pelo o APP</h1>
          <p>Suas agenda será sicronizada com a do seu celular</p>
          <S.QrCodeArea>
            <Qr value='teste' size={400} />
          </S.QrCodeArea>
          
          <S.ValidationCode>
            <span>Digite a numeração que apareceu no celular</span>
            <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
            <button type="button" onClick={SaveMac}> SINOCRIZAR {mac} </button>
          </S.ValidationCode>

        </S.Content>

        <Footer />
      </S.Container>
    );
  }
  
  export default QrCode;
  