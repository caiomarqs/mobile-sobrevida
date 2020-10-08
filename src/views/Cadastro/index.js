import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { StatusBarColor, TextSubTitle2 } from '../../components'

import { Colors } from '../../styles'

import { styles } from './styles'

const Cadastro = () => {



    useEffect(() => {
        // console.log(navigationStyle)

    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarColor
                backgroundColor={'transparent'}
                barStyle='dark-content'
                hasHeader={true}
            />
            <TextSubTitle2 style={styles.title}>Faça seu cadastro para se declarar doador</TextSubTitle2>
        </SafeAreaView>
    )
}

export { Cadastro }