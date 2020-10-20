import React from 'react'
import { SafeAreaView, View } from 'react-native'

import { SimpleInput, CaptionText, CaptionBoldText, PrimaryButton, SubTitleBoldText } from '../../components'

import { styles } from './styles'

const DeleteAccount = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentContatiner}>
                <SubTitleBoldText style={styles.title}>
                    Delete sua conta
                </SubTitleBoldText>
                <View style={{}}>
                    <CaptionText style={styles.subTtitle}>
                        Respeitamos os direitos indviduias de qualquer pessoa, para confirmar basta digitar o seu email como esta a baixo
                    </CaptionText>
                    <CaptionBoldText style={styles.emailConfirm}>
                        teste@gmail.com
                    </CaptionBoldText>


                    <SimpleInput placeholder="Confirmar email" />

                </View>
                <View style={styles.buttonContatiner}>
                    <PrimaryButton style={styles.button} title="Excluir e Sair" />
                </View>
            </View>

        </SafeAreaView>
    )
}

export { DeleteAccount }