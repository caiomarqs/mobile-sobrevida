import React, { useContext } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { styles } from './styles'


const Login = (props) => {

    const { dispatch } = useContext(AuthContext)

    const handleCadastro = () => {
        props.navigation.navigate('Cadastro');
    }

    const handleLogin = () => {
        dispatch({ type: AUTH_ACTIONS.LOGIN })
    }

    return (
        <SafeAreaView>
            <Text style={styles.text}>Login</Text>
            <Button title="cadastro" onPress={() => handleCadastro()} />
            <Button title="login" onPress={() => handleLogin()} />
        </SafeAreaView>
    )
}

export { Login }