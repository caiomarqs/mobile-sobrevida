import React, { useContext, useState } from 'react'
import { View, Image, Keyboard } from 'react-native'

import HandImage from '../../../assets/img/handIlustration.png'
import { CaptionText, TitleText, Modal, PrimaryButton, TextButton, TextArea, } from '../../../components'
import { UserContext } from '../../../context'
import { USER_ACTIONS } from '../../../reducers'
import { postDepoimentoUser } from '../../../services'
import { getData } from '../../../utils'

import { styles } from './styles'

const DepoimentoModal = (props) => {

    const { userState, dispatch } = useContext(UserContext)

    const [modal, setModal] = useState(false)
    const [depoimento, setDepoimento] = useState('')

    const handleCadastrarDepoimento = () => {

        getData('userData').then((cache) => {
            postDepoimentoUser(cache.id, depoimento, cache.token).then(({ data }) => {
                dispatch({ type: USER_ACTIONS.SET_DATA, payload: { ...userState.user, depoimento: data } })
                props.navigation.navigate('Depoimento')

            }).catch(_ =>
                alert('não foi possivel cadastra o depoimento no servidor')
            )

        }).catch(_ =>
            alert('não foi possivel cadastra o depoimento para o seu usuário')
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Image source={HandImage} style={styles.image} />
                <CaptionText style={styles.content}>
                    Você não tem depoimento cadastrado cadastre seu depoimento.
                </CaptionText>
                <TextButton
                    title="Cadastrar Depoimento"
                    onPress={() => setModal(true)}
                />
            </View>

            <Modal
                show={modal}
                close={() => setModal(false)}
            >
                <View style={styles.modal}>
                    <TitleText
                        style={styles.modalTitle}
                    >
                        Deixe algumas palavras para seus familiares
                    </TitleText>
                    <TextArea
                        style={styles.textArea}
                        placeholder='Digite a menssagem...'
                        onEndEditing={() => Keyboard.dismiss()}
                        value={depoimento}
                        onChangeText={(text) => setDepoimento(text)}
                    />
                </View>
                <PrimaryButton
                    title="Cadastrar"
                    style={styles.modalButton}
                    onPress={() => handleCadastrarDepoimento()}
                />
            </Modal>
        </>
    )
}

export { DepoimentoModal }

