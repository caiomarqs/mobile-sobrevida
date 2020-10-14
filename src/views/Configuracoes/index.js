import React, {useContext} from 'react'
import { SafeAreaView, View } from 'react-native'

import { ConfigButton } from '../../components'
import {UserContext} from '../../context'

import {styles} from './styles'

const Configuracoes = (props) => {

    const {userState} = useContext(UserContext)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ConfigButton
                title="Nome da conta"
                content={`${userState.user.nome} ${userState.user.sobreNome}`}
                isAction={false}
                />

                <ConfigButton 
                title="Alterar senha"
                content="*********" 
                style={styles.button}
                onPress={() => props.navigation.navigate('ChangePass')} />

                <ConfigButton 
                title="Deletar conta"
                content="Delete sua conta do SobreVida" 
                onPress={() => props.navigation.navigate('DeleteAccount')} />

            </View>
        </SafeAreaView>
    )
}

export { Configuracoes }

