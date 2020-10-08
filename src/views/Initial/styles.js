import { StyleSheet } from 'react-native'

import { Base, Colors, Paddings } from '../../styles'

const styles = StyleSheet.create({
    container: {
        ...Base.viewContainer,
        backgroundColor: Colors.vinho000,
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    headerContainer: {
        flex: 1,
        paddingHorizontal: Paddings.viewContainerPaddingHorizontal,
    },
    logoHeader: {
        marginTop: 32,
        marginBottom: 16
    },
    title:{
        width: 132,
        color: Colors.branco000
    },
    brandingContainer: {
        flex: 4,
        maxHeight: 448
    },
    btnsContainer: {
        paddingHorizontal: Paddings.viewContainerPaddingHorizontal,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLoginContainer:{
        marginBottom: 16
    },
    btnText:{
        color: Colors.branco000
    }
})

export { styles }