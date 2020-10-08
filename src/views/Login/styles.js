import { StyleSheet } from 'react-native'

import { Colors, Base } from '../../styles'

const styles = StyleSheet.create({
    container: {
        ...Base.viewContainer
    },
    brandingContainer: {
        paddingHorizontal: 16,
        flex: 7,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 22
    },
    title: {
        width: 132,
        color: Colors.branco000,
    },
    brandingImg: {
        flex: 1,
        height: '100%'
    },
    principalContainer: {
        backgroundColor: Colors.branco000,
        flex: 5,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        elevation: .5,
        shadowOpacity: 1,
        paddingHorizontal: 16
    },
    emailInput: {
        marginTop: 32,
        marginBottom: 16
    },
    senhaInput:{
        marginBottom: 16,
    }
})

export { styles }