import React, {useState, useEffect} from 'react'
import { View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, Switch, TouchableOpacity } from 'react-native'

import styles from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DateTimeInput from '../../components/DateTimeInput'

import typeIcons from '../../utils/typeIcons'

import api from '../../services/api'

export default function Task({ navigation }) {
    const [ done, setDone ] = useState(false)

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation} />
            <ScrollView style={{widt: '100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                    {
                    typeIcons.map(icon => (
                        icon != null &&
                        <TouchableOpacity>
                            <Image source={icon}  style={styles.imageIcon}/>
                        </TouchableOpacity>
                    ))
                    }
                </ScrollView>

                <Text style={styles.label}> Título </Text>
                <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer..."/>

                <Text style={styles.label}> Detalhes </Text>
                <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder="Detalhes da atividade..."/>

                <DateTimeInput type={'date'} />
                <DateTimeInput type={'hour'} />

                <View style={styles.inLine}>
                    <View style={styles.inputInLine}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={ done ? '#00761b' : '#ee6b26'} />
                        <Text style={styles.switchLabel}> Concluído </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}> Excluír </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer icon={'save'}/>
          
        </KeyboardAvoidingView>
    )
}