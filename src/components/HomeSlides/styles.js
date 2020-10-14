import { StyleSheet } from 'react-native'

import { Colors, Widths } from '../../styles'

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        position: 'relative'
    },
    slideContainer: {
        flex: 1,
        width: '100%',
        position: 'relative'
    },
    slide: {
        flex: 1,
        backgroundColor: Colors.vinhoP000,
        borderRadius: 8,
        width: Widths.WINDOW_WIDTH - 32,
        elevation: 1,
        padding: 16,
        zIndex: 0
    },
    image: {
        marginTop: 16,
        maxHeight: 140,
        alignSelf: 'center',
    },
    dotsContainer: {
        position: "absolute",
        height: 8,
        width: 32,
        zIndex: 1,
        bottom: 12,
        left: (Widths.WINDOW_WIDTH - 64) / 2,
        flexDirection: "row"
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 4
    }
})


export { styles }