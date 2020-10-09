import { StyleSheet } from 'react-native'

import { Base, Colors, Paddings, Heigths, Widths } from '../../styles'

const IMAGE_WIDTH = Heigths.WINDOW_HEIGHT <= 640 ? Widths.WINDOW_WIDTH : Widths.WINDOW_WIDTH + 100
const IMAGE_RATIO = IMAGE_WIDTH / 511

const styles = StyleSheet.create({
    container: {
        ...Base.viewContainer,
        backgroundColor: Colors.vinho000,
    },
    headerContainer: {
        flex: 2,
        paddingHorizontal: Paddings.viewContainerPaddingHorizontal,
    },
    logoHeader: {
        marginTop: 32,
        marginBottom: 16
    },
    title: {
        width: 132,
        color: Colors.branco000
    },
    brandingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: IMAGE_WIDTH,
        height: 452 * IMAGE_RATIO
    },
    btnsContainer: {
        paddingHorizontal: Paddings.viewContainerPaddingHorizontal,
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.vinho000,
    },
    btnLoginContainer: {
        marginBottom: 16
    },
    btnText: {
        color: Colors.branco000
    }
})

export { styles }