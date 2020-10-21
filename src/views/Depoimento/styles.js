import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1
    },
    title: {
        marginVertical: 16,
        textAlign: "center"
    },
    buttonContainer: {
        flex: 1,
        alignItems: "flex-end",
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        width: '100%',
        marginBottom: 16
    }
})

export { styles }