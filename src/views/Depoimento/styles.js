import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        paddingTop: 60,
        alignItems: 'center'
    },
    image: {
        marginTop: 16,
        marginBottom: 16
    },
    title: {
        marginVertical: 16,
        textAlign: "center"
    },
    depoimentoContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: Colors.cinza000
    },
    depoimentoText: {
        flex: 1,
        marginRight: 4
    },
    modal: {
        flex: 1,
        paddingTop: 60
    },
    modalTitle: {
        marginBottom: 16
    },
    textArea: {
        borderWidth: 0,
        flex: 1,
        marginBottom: 8
    },
    modalButton: {
        marginBottom: 16
    }
})

export { styles }