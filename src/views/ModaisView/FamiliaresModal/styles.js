import { StyleSheet } from 'react-native'

import { Widths } from '../../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    image: {
        marginBottom: 32
    },
    content: {
        textAlign: 'center',
        marginBottom: 16
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
    }

})

export { styles }