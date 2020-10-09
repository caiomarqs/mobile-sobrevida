import React, { useContext, useEffect, useState } from 'react'
import { Image, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { TextSubTitle2, SimpleInput, PassInput, CheckInput, PrimaryButton, HairLine, Caption } from '../../components'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Login = (props) => {

    const { dispatch } = useContext(AuthContext)

    const [keepLogin, setKeepLogin] = useState(false)

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

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.principalContainer}
            >
                <View style={styles.inputsContainer}>
                    <SimpleInput placeholder='Email' style={styles.emailInput} />
                    <PassInput placeholder='Senha' style={styles.senhaInput} />
                    <CheckInput label="Me manter logado" onPress={() => setKeepLogin(!keepLogin)} />
                    <PrimaryButton
                        onPress={() => handleLogin()}
                        title='Login'
                        style={styles.button}
                    />
                </View>
                <HairLine />
                <TouchableOpacity
                    activeOpacity={.75}
                    style={styles.rememberPassContainer}
                >
                    <Caption style={styles.rememberPassText}>Esqueçeu a senha?</Caption>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export { Login }