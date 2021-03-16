import React, {useState, useEffect} from 'react'
import * as S from './styles'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'


function Task() {
    const [lateCount, setLateCount] = useState()
    const [type, setType] = useState()

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

        <S.Form>
          <S.TypeIcons>
            {
              TypeIcons.map((icon, index) => (
                index > 0 && 
                <button type="button" onClick={() => setType(index)}>
                  <img src={icon} alt="Tipo da Tarefa" 
                    className={type && type !== index && 'inative'} />
                </button>
              ))
            }
          </S.TypeIcons>
        </S.Form>
        
        <Footer />
      </S.Container>
    );
  }
  
  export default Task;
  