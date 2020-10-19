import React, { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'

import { ConfigButton } from '../../components'
import { UserContext } from '../../context'

import { styles } from './styles'

const Configuracoes = (props) => {

    const { userState } = useContext(UserContext)

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <ConfigButton
                    content={`${userState.user.nome} ${userState.user.sobreNome}`}
                    isAction={false}
                    title="Nome da conta"
                />

                <ConfigButton
                    content="*********"
                    onPress={() => props.navigation.navigate('ChangePass')}
                    style={styles.button}
                    title="Alterar senha"
                />

                <ConfigButton
                    content="Delete sua conta do SobreVida"
                    onPress={() => props.navigation.navigate('DeleteAccount')}
                    title="Deletar conta"
                />

            </View>
        </SafeAreaView>
    )
}

export { Configuracoes }

