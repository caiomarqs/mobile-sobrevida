import {StyleSheet} from 'react-native'

import {Colors} from '../../styles'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        backgroundColor: Colors.cinza000,
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 4,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        marginBottom: 3,
        color: Colors.vinho000
    },
    contentContainer: {
        flex:1
    }
})

export {styles}