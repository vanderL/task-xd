import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

import add from '../../assets/add.png'
import save from '../../assets/save.png'

export default function Footer({ icon, onPress }){
    return (
        <View style={styles.footer}>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Image source={icon == 'add' ? add : save} style={styles.image} />
                </TouchableOpacity>
                
                <Text style={styles.text}>
                    Organizando
                </Text>

                    
        </View>
    )
}