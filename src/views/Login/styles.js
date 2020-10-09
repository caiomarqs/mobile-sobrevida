import { StyleSheet } from 'react-native'

import { Colors, Base, Heigths, Widths } from '../../styles'

const PRICIPAL_CONTAINER_BOTTOM_POS = Heigths.NAVIGATION_BAR > 0 ? 0 - Heigths.NAVIGATION_BAR : 0
const IMAGE_WIDTH = Heigths.WINDOW_HEIGHT <= 640 ? (Widths.WINDOW_WIDTH / 3) : 220 //imagem ocupa 33% da largura da tela em dispositiovos de menos de 4.7'
const IMAGE_RATIO = IMAGE_WIDTH / 220 //Ratio -> largura atual da imagem / largura original


const styles = StyleSheet.create({
    container: {
        ...Base.viewContainer
    },
    brandingContainer: {
        paddingHorizontal: 16,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 22
    },
    title: {
        width: 160,
        color: Colors.branco000,
    },
    brandingImg: {
        flex: 1,
        position: 'absolute',
        right: 16,
        bottom: 346 + PRICIPAL_CONTAINER_BOTTOM_POS,
        maxHeight: 364.64,
        width: IMAGE_WIDTH,
        height: 364.64 * IMAGE_RATIO // Altura orignal / ratio -> Para q a se torne "responsiva"
    },
    principalContainer: {
        backgroundColor: Colors.branco000,
        position: 'absolute',
        width: '100%',
        height: 346,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        elevation: .5,
        shadowOpacity: 1,
        bottom: PRICIPAL_CONTAINER_BOTTOM_POS
    },
    inputsContainer: {
        paddingHorizontal: 16,
    },
    emailInput: {
        marginTop: 32,
        marginBottom: 16
    },
    senhaInput: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        marginBottom: 16
    },
    rememberPassContainer: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        flex: 1,
        paddingBottom: Heigths.NAVIGATION_BAR > 0 ? Heigths.NAVIGATION_BAR : 0
    },
    rememberPassText: {
        color: Colors.vinho000
    }
})

export { styles }