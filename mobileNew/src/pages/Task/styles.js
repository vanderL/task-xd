import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start'    
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    label: {
        color: '#707070',
        fontSize: 18,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 16,
        padding: 10,
        width: '84%',
        borderBottomWidth: 1,
        borderBottomColor: '#ee6b26',
        marginHorizontal: 10
    },
    inputArea: {
        fontSize: 16,
        padding: 10,
        width: '84%',
        borderWidth: 1,
        borderColor: '#ee6b26',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100 ,
        textAlignVertical: 'top'
    },
    inLine: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    inputInLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    switchLabel: {
        fontWeight: 'bold',
        color: '#ee6b26',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10,
    },
    removeLabel: {
        fontWeight: 'bold',
        color: '#20295f',
        textTransform: 'uppercase',
        fontSize: 16,
    }

})

export default styles