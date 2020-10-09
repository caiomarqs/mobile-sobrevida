import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

const styles = StyleSheet.create({
    headerContainer: {
        height: 48,
        backgroundColor: Colors.branco000,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12
    },
    logOutContainer:{
        alignSelf: "flex-end"
    }
})

export { styles }