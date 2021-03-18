import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

function Header({ clickNotification }) {
    const [lateCount, setLateCount] = useState()
    
    async function lateVerifyTasks() {
        
        await api.get(`/task/filter/late/22:22:11:33:33:22`)
          .then(response => {
            setLateCount(response.data.length)
          })
    }

    async function logout() {
        localStorage.removeItem('@todo/macaddress')
        window.location.reload()
    }

    useEffect(() => {
        lateVerifyTasks()
    }, [])

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="ToDo"/>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/"> INÍCIO </Link>
                
                <span className="dividir" />
                <Link to="/task"> NOVO AGENDAMENTO </Link>
                
                <span className="dividir" />
                {!isConnected 
                    ?
                    <Link to="/qrcode"> SICRONIZAR CELULAR </Link>
                    :
                    <button type="button" onClick={logout}> SAIR </button>
                }

                
                {
                    lateCount && 
                    <>
                        <span className="dividir" />
                        <button onClick={clickNotification} id="notification">
                            <img src={bell} alt="Notificação" />
                            <span> {lateCount} </span>
                        </button>
                    </>
                }

            </S.RightSide>
        </S.Container>
    );
  }
  
  export default Header;
  