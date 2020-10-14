import React, { useContext, useState } from 'react'
import { Image, View, KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { SubTitleBoldText, SimpleInput, PassInput, CheckInput, PrimaryButton, HairLine, CaptionText } from '../../components'
import { useKeyBoardIsVisible } from '../../hooks'
import { loginValidation, storeData, storeString } from '../../utils'
import { authValidation, authLogIn } from '../../services'

import { styles } from './styles'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [keepLogin, setKeepLogin] = useState(false)

    const { dispatch } = useContext(AuthContext)

    const keyBoardIsVisible = useKeyBoardIsVisible()

    const handleLogin = () => {

        const [test, validationErrors] = loginValidation(email, senha)

        if (test) {
            authValidation(email, senha).then(({ data }) => {
                if (!data.email) {
                    alert("Email não cadastrado")
                    return
                }
                else if (!data.password) {
                    alert("Senha incorreta")
                    return
                }
                else {
                    authLogIn(email, senha).then(({ data }) => {
                        try {
                            if (keepLogin) {
                                storeString('keepLogin', 'true')
                            }
                            storeData('userData', data)
                            dispatch({ type: AUTH_ACTIONS.LOGIN })
                        } catch (error) {
                            console.error(error)
                        }
                    })
                }
            }).catch(err => {
                alert('Impossivel se comunicar com a api')
            })
        }
        else {
            alert(validationErrors.toString().replace(/,/, '\n'))
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <View style={styles.brandingContainer}>
                    <SubTitleBoldText style={styles.title}>Bem vindo de volta!</SubTitleBoldText>
                    {
                        !keyBoardIsVisible
                        &&
                        <Image
                            style={styles.brandingImg}
                            source={require('../../assets/img/loginCoveImage.png')}
                        />
                    }
                </View>

                <View style={styles.principalContainer}>
                    <View style={styles.inputsContainer}>
                        <SimpleInput
                            placeholder='Email'
                            style={styles.emailInput}
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                        />
                        <PassInput
                            placeholder='Senha'
                            style={styles.senhaInput}
                            value={senha}
                            onChangeText={(value) => setSenha(value)}
                        />
                        <CheckInput
                            label="Me manter logado"
                            onPress={() => setKeepLogin(!keepLogin)}
                        />
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
                        onPress={() => props.navigation.navigate('ForgotPass')}
                    >
                        <CaptionText style={styles.rememberPassText}>Esqueçeu a senha?</CaptionText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export { Login }