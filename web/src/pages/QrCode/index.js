import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
  const [lateCount, setLateCount] = useState()

  async function lateVerifyTasks() {
    await api.get(`/task/filter/late/22:22:11:33:33:22`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }
  useEffect(() => {
    lateVerifyTasks()

  }, [])

    return (
      <S.Container>
        <Header lateCount={lateCount} />

        <S.Content>
          <h1>Capture o qrcode pelo o APP</h1>
          <S.QrCodeArea></S.QrCodeArea>
          <p>Suas atividades serão sicronizadas com a do seu celular</p>
        </S.Content>

        <Footer />
      </S.Container>
    );
  }
  
  export default QrCode;
  