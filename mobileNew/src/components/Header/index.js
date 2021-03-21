import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import qrcode from '../../assets/qrcode.png'

export default function Header() {
    return (
        <View style={styles.header}>

            <TouchableOpacity style={styles.leftIcon}>
                <Image source={qrcode} style={styles.leftIconImage} />
            </TouchableOpacity>

            <Image source={logo} style={styles.logo} />

            <TouchableOpacity style={styles.notification}>
                <Image source={bell} style={styles.notificationImage}/>
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>3</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}