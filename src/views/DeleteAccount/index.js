import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { color } from 'react-native-reanimated'

import { SimpleInput, CaptionText, CaptionBoldText, PrimaryButton, SubTitleBoldText } from '../../components'
import { UserContext, AuthContext } from '../../context'
import { AUTH_ACTIONS } from '../../reducers'
import { deleteUser } from '../../services'
import { getData, storeString, storeData } from '../../utils'

import { styles } from './styles'

const DeleteAccount = () => {


    const { userState } = useContext(UserContext)
    const { dispatch: dispatchAuth } = useContext(AuthContext)


    const [token, setToken] = useState('')

    const [email, setEmail] = useState('')

    useEffect(() => {
        //Recuperaçã do token na montagem pois o token é apagado quando o usuário é deletado
        getData('userData').then((cache) => {
            setToken(cache.token)
        })
    }, [token])

    const handleDelete = () => {
        if (email === userState.user.email) {
            try {
                deleteUser(userState.user.cod, token)
                storeString('keepLogin', 'false')
                storeData('userData', {})
                dispatchAuth({ type: AUTH_ACTIONS.LOGOUT })
            } catch (error) {
                console.log(error)
                alert('Não foi possivel excluir o usuario')
            }
        }
        else {
            alert('Insira o email extamente igual ao mostrado')
        }

    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentContatiner}>
                <SubTitleBoldText style={styles.title}>
                    Delete sua conta
                </SubTitleBoldText>
                <View>
                    <CaptionText style={styles.subTtitle}>
                        Respeitamos os direitos indviduias de qualquer pessoa, para confirmar basta digitar o seu email como esta a baixo
                    </CaptionText>
                    <CaptionBoldText style={styles.emailConfirm}>
                        {userState.user.email}
                    </CaptionBoldText>


                    <SimpleInput
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Confirmar email"
                        value={email}
                    />

                </View>
                <View style={styles.buttonContatiner}>
                    <PrimaryButton style={styles.button} title="Excluir e Sair" onPress={() => handleDelete()} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export { DeleteAccount }