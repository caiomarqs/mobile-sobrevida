import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContatiner: {
        paddingHorizontal: 16,
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        alignSelf: 'center',
        marginTop: 16
    },
    subTtitle: {
        width: '100%',
        textAlign: 'center',
        marginVertical: 16
    },
    buttonContatiner: {
        flex: 1,
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginBottom: 16,
        width: '100%'
    },
    oldPass: {
        marginBottom: 16
    }
})

export { styles }