import { StyleSheet } from 'react-native'

import { Colors, Widths } from '../../styles'

const styles = StyleSheet.create({
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
})


export { styles }