import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { TextSubTitle2, SimpleInput, OverLine, PassInput } from '../../components'
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
        <SafeAreaView style={styles.container}>

            <View style={styles.brandingContainer}>
                <TextSubTitle2 style={styles.title}>Bem vindo de volta!</TextSubTitle2>
                <Image
                    style={styles.brandingImg}
                    source={require('../../assets/img/loginCoveImage.png')}
                />
            </View>

            <View style={styles.principalContainer}>
                <SimpleInput placeholder='Email' style={styles.emailInput} />
                <PassInput
                    placeholder={'Senha'}
                    style={styles.senhaInput}
                />
                <OverLine>Me manter logado</OverLine>
            </View>

        </SafeAreaView>
    )
}

export { Login }