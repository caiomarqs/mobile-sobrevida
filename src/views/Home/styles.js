import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    title: {
        maxWidth: 126,
        marginTop: 32
    },
    slideContainer: {
        marginTop: 16
    },
    slide: {
        height: 286,
        backgroundColor: Colors.vinhoP000,
        borderRadius: 8
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