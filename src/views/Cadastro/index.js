import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { StatusBarColor } from '../../components'
import { Colors } from '../../styles'

const Cadastro = () => {
    return (
        <SafeAreaView>
            <StatusBarColor backgroundColor={Colors.branco000} barStyle='dark-content' hasHeader={true}/>
            <Text>Cadastro</Text>
        </SafeAreaView>
    )
}

export { Cadastro }