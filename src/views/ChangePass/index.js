import React, { useRef, useState, useContext } from 'react'
import { SafeAreaView, View } from 'react-native'

import { PrimaryButton, CaptionText, PassInput, SubTitleBoldText } from '../../components'
import { UserContext } from '../../context'
import { authValidation, patchPasswordUser } from '../../services'
import { getData, changePassValidation } from '../../utils'

import { styles } from './styles'

const ChangePass = () => {

    const { userState } = useContext(UserContext)

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')

    const newPassRef = useRef()

    const handleSalvar = () => {
        authValidation(userState.user.email, oldPass).then(({ data }) => {

            if (data.password) {

                const [test] = changePassValidation(newPass)

                if (test) {
                    getData('userData').then((cache) => {

                        patchPasswordUser(cache.id, newPass, cache.token).then(() => {
                            alert('Senha alterada com sucesso')
                            
                        }).catch(err =>
                            console.log(err)
                        )

                    })
                }
                else {
                    alert("Insira uma senha nova valida")
                }

            }
            else {
                alert("Sua senha antiga está errada")
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentContatiner}>
                <SubTitleBoldText style={styles.title}>
                    Mude sua senha
                </SubTitleBoldText>
                <View>
                    <CaptionText style={styles.subTtitle}>
                        Para mudar sua senha a senha antiga deve ser digitada corretamente.
                    </CaptionText>
                    <PassInput
                        onChangeText={(text) => setOldPass(text)}
                        onSubmitEditing={() => newPassRef.current.focus()}
                        placeholder='Senha Antiga'
                        returnKeyType="next"
                        style={styles.oldPass}
                        value={oldPass}
                    />

                    <PassInput
                        forwardRef={newPassRef}
                        onChangeText={(text) => setNewPass(text)}
                        onSubmitEditing={() => newPassRef.current.focus()}
                        placeholder='Senha Nova'
                        value={newPass}
                    />
                </View>
                <View style={styles.buttonContatiner}>
                    <PrimaryButton style={styles.button} title="Salvar" onPress={() => handleSalvar()} />
                </View>
            </View>

        </SafeAreaView>
    )
}


export { ChangePass }