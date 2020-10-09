import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { StatusBarColor } from '../../components'

const ForgotPass = () => {
    return (
        <SafeAreaView>
            <StatusBarColor backgroundColor='transparent' barStyle='dark-content' />
            <Text>Esqueçeu a senha</Text>
        </SafeAreaView>
    )
}

export { ForgotPass }