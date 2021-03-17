import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'


function Header({ lateCount, clickNotification }) {
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
                <Link to="/qrcode"> SINOCRIZAR CELULAR </Link>
                
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
  