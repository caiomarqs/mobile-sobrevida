import { StyleSheet } from 'react-native'

import { Widths } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 60
    },
    familiarContainer: {
        marginTop: 32
    },
    modal: {
        flex: 1,
        paddingTop: 60
    },
    modalTitle: {
        marginBottom: 16
    },
    modalButton: {
        marginBottom: 16
    },
    modalButtonsContainer: {
        flexDirection: 'row'
    },
    modalOutLineButton1: {
        flex: 1,
        marginRight: 6
    },
    modalOutLineButton2: {
        flex: 1,
        marginLeft: 6
    },
    modalScroll: {
        flex: 1,
        marginTop: 60
    },
    modalSlide: {
        flex: 1,
        width: Widths.DEVICE_WIDTH - 32
    },
    input: {
        marginBottom: 12
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 16
    },
    simpleButton: {
        marginVertical: 12
    },
    addButton:{
        marginVertical: 16,
        alignSelf: 'center'
    }
})

export { styles }