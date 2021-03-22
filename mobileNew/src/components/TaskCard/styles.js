import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '90%',
        marginVertical: 10,
        height: 100,
        backgroundColor: '#dedede',
        borderRadius: 10,
        borderWidth: 1
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    typeActive: {
        width: 50,
        height: 50,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 16
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    cardDate: {
        color: '#ee6b26',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardTime: {
        color: '#707070'
    },
    done: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '90%',
        marginVertical: 10,
        height: 100,
        backgroundColor: '#dedede',
        borderRadius: 10,
        borderWidth: 1,
        opacity: 0.3,
    }
})

export default styles