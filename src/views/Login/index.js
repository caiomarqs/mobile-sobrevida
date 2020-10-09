import React, { useContext, useState } from 'react'
import { Image, View, KeyboardAvoidingView, Platform, TouchableOpacity, Dimensions } from 'react-native'
import { SafeAreaView, initialWindowMetrics } from 'react-native-safe-area-context'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { TextSubTitle2, SimpleInput, PassInput, CheckInput, PrimaryButton, HairLine, CaptionText } from '../../components'
import { useKeyBoardIsVisible } from '../../hooks'

import { styles } from './styles'



const Login = (props) => {

    const { dispatch } = useContext(AuthContext)

    const keyBoardIsVisible = useKeyBoardIsVisible()

    const [keepLogin, setKeepLogin] = useState(false)

    const handleLogin = () => {
        dispatch({ type: AUTH_ACTIONS.LOGIN })
    }

    return (
        <SafeAreaView initialWindowMetrics={initialWindowMetrics} style={styles.container} >
            <KeyboardAvoidingView style={styles.container} behavior='padding'>

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

                <View style={styles.principalContainer}>
                    <View style={styles.inputsContainer}>
                        <SimpleInput placeholder='Email' style={styles.emailInput} />
                        <PassInput placeholder='Senha' style={styles.senhaInput} />
                        <CheckInput label="Me manter logado" onPress={() => setKeepLogin(!keepLogin)} />
                        <PrimaryButton onPress={() => handleLogin()} title='Login' style={styles.button} />
                    </View>
                    <HairLine />
                    <TouchableOpacity activeOpacity={.75} style={styles.rememberPassContainer}>
                        <CaptionText style={styles.rememberPassText}>Esqueçeu a senha?</CaptionText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export { Login }