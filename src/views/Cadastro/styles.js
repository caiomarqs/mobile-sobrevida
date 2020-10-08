import { StyleSheet } from 'react-native'

import { Base, Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        ...Base.viewContainer,
        backgroundColor: Colors.branco000,
    },
    title:{
        textAlign: "center",
        marginTop: 32
    },
    inputsContainer:{
        paddingHorizontal: 16,
        paddingTop: 32
    },
    cadastroInput:{
        marginBottom: 16
    }
})

export { styles }