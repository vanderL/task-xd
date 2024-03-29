import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'

import styles from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard'

import api from '../../services/api'

export default function Home({ navigation }) {  
    const [filter, setFilter] = useState('today')
    const [tasks,  setTasks] = useState([])
    const [load, setLoad] = useState(false)
    const [lateCount, setLateCount] = useState()

    async function loadTasks() {
        setLoad(true)
        
        await api.get(`/task/filter/${filter}/22:22:11:33:33:22`).then(response => {
            setTasks(response.data)
            setLoad(false)
        })
    }

    async function lateVerifyTasks() {        
        await api.get(`/task/filter/late/22:22:11:33:33:22`).then(response => {
            setLateCount(response.data.length)
        })
    }

    async function Notification() {
        setFilter('late')
    }

    function New(){
        navigation.navigate('Task')
    }

    useEffect(() => {
        loadTasks()
        lateVerifyTasks()
    }, [filter])
    
    return(
        <View style={styles.container}>
            <Header 
                showNotification={true}
                showBack={false} 
                pressNotification={Notification}
                late={lateCount}
            />

            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInatived}>Todos</Text>        
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInatived}>Hoje</Text>        
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInatived}>Semana</Text>        
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInatived}>Mês</Text>        
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInatived}>Ano</Text>        
                </TouchableOpacity>
            </View>
            
            <View style={styles.title}>
                <Text style={styles.titleText}>AGENDAMENTOS {filter == 'late' && ' ATRASADOS'}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                {
                    load ? 
                    <ActivityIndicator color='#ee6b26' size={60}/>
                    :
                    tasks.map(t => (
                        <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
                    ))
                }
            </ScrollView>


            <Footer  icon={'add'} onPress={New}/>

        </View>
    )
}