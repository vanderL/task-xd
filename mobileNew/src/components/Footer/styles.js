import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 90,
        backgroundColor: '#20295f',
        borderTopWidth: 5,
        borderTopColor: '#ee6b26',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'relative',
        bottom: 30
    },
    image: {
        width: 85,
        height: 85
    },
    text: {
        position: 'relative',
        bottom: 20,
        color: '#fff'
    }
})

export default styles