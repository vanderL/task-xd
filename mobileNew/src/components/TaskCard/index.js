import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import iconDefault from '../../assets/default.png'

export default function TaskCard ({ done }) {
    return (
        <TouchableOpacity style={done ? styles.done : styles.card}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>Fazer relatorios</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}> 17/02/2020 </Text>
                <Text style={styles.cardTime}> 10:00 </Text>
            </View>
        </TouchableOpacity>
    )
}