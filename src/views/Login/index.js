import React, { useContext, useEffect, useState } from 'react'
import { Image, SafeAreaView, View, KeyboardAvoidingView, Platform, TouchableOpacity, Dimensions } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { TextSubTitle2, SimpleInput, PassInput, CheckInput, PrimaryButton, HairLine, CaptionText } from '../../components'
import { useKeyBoardIsVisible } from '../../hooks'
import { Heigths } from '../../styles'

import { styles } from './styles'



const Login = (props) => {

    const { dispatch } = useContext(AuthContext)

    const keyBoardIsVisible = useKeyBoardIsVisible()

    const [keepLogin, setKeepLogin] = useState(false)

    const handleCadastro = () => {
        props.navigation.navigate('Cadastro');
    }

    const handleLogin = () => {
        dispatch({ type: AUTH_ACTIONS.LOGIN })
    }

    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"}       >

                <View style={styles.brandingContainer}>
                    <TextSubTitle2 style={styles.title}>Bem vindo de volta!</TextSubTitle2>
                    {
                        !keyBoardIsVisible
                        &&
                        <Image
                            style={styles.brandingImg}
                            source={require('../../assets/img/loginCoveImage.png')}
                        />
                    }
                </View>

                <View
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
                        <CaptionText style={styles.rememberPassText}>Esqueçeu a senha?</CaptionText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { Login }