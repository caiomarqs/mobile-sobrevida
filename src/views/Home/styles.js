import { StyleSheet } from 'react-native'

import { Colors, Widths } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        paddingHorizontal: 16,
        flex: 1
    },
    title: {
        maxWidth: 126,
        marginTop: 32
    },
    slideContainer: {
        marginTop: 16, 
        flex: 1,
        width: '100%',
        position: 'relative'
    },
    slide: {
        flex: 1,
        backgroundColor: Colors.vinhoP000,
        borderRadius: 8,
        width: Widths.WINDOW_WIDTH - 32,
        elevation: 1
    },
    subTitle: {
        marginVertical: 16
    },
    homeButtonsContanier: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export { styles }