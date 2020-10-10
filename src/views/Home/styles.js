import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

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
        flex: 1
    },
    slide: {
        flex: 1,
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