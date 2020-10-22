import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '50%',
        backgroundColor: Colors.branco000,
        width: '100%',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingLeft: 16,
        paddingRight: 16,
        elevation: .5,
        shadowOpacity: .5,
    },
    closeContainer: {
        position: 'absolute',
        width: 28,
        height: 28,
        top: 16,
        left: 16
    }
})

export { styles }