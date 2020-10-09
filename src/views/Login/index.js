import React, { useContext, useState } from 'react'
import { Image, View, KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { SubTitleBoldText, SimpleInput, PassInput, CheckInput, PrimaryButton, HairLine, CaptionText } from '../../components'
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
                        <SimpleInput placeholder='Email' style={styles.emailInput} />
                        <PassInput placeholder='Senha' style={styles.senhaInput} />
                        <CheckInput label="Me manter logado" onPress={() => setKeepLogin(!keepLogin)} />
                        <PrimaryButton onPress={() => handleLogin()} title='Login' style={styles.button} />
                    </View>
                    <HairLine />
                    <TouchableOpacity activeOpacity={.75} style={styles.rememberPassContainer} onPress={() => props.navigation.navigate('ForgotPass')}>
                        <CaptionText style={styles.rememberPassText}>Esqueçeu a senha?</CaptionText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export { Login }