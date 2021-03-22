import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ee6b26'
    },
    filterTextInatived: {
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.5
    },
    content: {
        width: '100%',
        marginTop: 10,
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#20295f',
        alignItems: 'center',
    },
    titleText : {
        color: '#20295f',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10

    }
})

export default styles