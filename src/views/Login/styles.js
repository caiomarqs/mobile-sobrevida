import { StyleSheet } from 'react-native'

import { Colors, Base, Heigths } from '../../styles'

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
        width: 132,
        color: Colors.branco000,
    },
    brandingImg: {
        flex: 1,
        position: 'absolute',
        right: 16,
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
        bottom: 0 - Heigths.NAVIGATION_BAR
    },
    inputsContainer:{
        paddingHorizontal: 16,
    },
    emailInput: {
        marginTop: 32,
        marginBottom: 16
    },
    senhaInput: {
        marginBottom: 16,
    },
    button:{
        marginTop: 16,
        marginBottom: 16
    },
    rememberPassContainer:{
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: 55,
        paddingTop: 8
    },
    rememberPassText:{
        color: Colors.vinho000
    }
})

export { styles }