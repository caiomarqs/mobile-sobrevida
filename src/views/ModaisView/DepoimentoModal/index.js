import React, { useContext, useState } from 'react'
import { Image, Keyboard, View } from 'react-native'

import {
    CaptionText,
    Modal,
    PrimaryButton,
    TextArea,
    TextButton,
    TitleText
} from '../../../components'
import { UserContext } from '../../../context'
import { USER_ACTIONS } from '../../../reducers'
import { postDepoimentoUser } from '../../../services'
import { getData } from '../../../utils'
import HandImage from '../../../assets/img/handIlustration.png'

import { styles } from './styles'

const DepoimentoModal = (props) => {

    const { userState, dispatch } = useContext(UserContext)

    const [modal, setModal] = useState(false)
    const [depoimento, setDepoimento] = useState('')

    const handleCadastrarDepoimento = () => {

        getData('userData').then((cache) => {
            postDepoimentoUser(cache.id, depoimento, cache.token).then(({ data }) => {
                dispatch({
                    type: USER_ACTIONS.SET_DATA,
                    payload: { ...userState.user, depoimento: data }
                })
                props.navigation.navigate('Depoimento')

            }).catch(_ =>
                alert('Não foi possivel cadastra o depoimento no servidor')
            )

        }).catch(_ =>
            alert('Não foi possivel cadastra o depoimento para o seu usuário')
        )
    }

    return (
        <>
            <View style={styles.container}>

                <Image
                    source={HandImage}
                    style={styles.image}
                />
                <CaptionText style={styles.content}>
                    Você não tem depoimento cadastrado cadastre seu depoimento.
                </CaptionText>
                <TextButton
                    onPress={() => setModal(true)}
                    title="Cadastrar Depoimento"
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
                        onChangeText={(text) => setDepoimento(text)}
                        onEndEditing={() => Keyboard.dismiss()}
                        placeholder='Digite a menssagem...'
                        style={styles.textArea}
                        value={depoimento}
                    />
                </View>

                <PrimaryButton
                    onPress={() => handleCadastrarDepoimento()}
                    style={styles.modalButton}
                    title="Cadastrar"
                />

            </Modal>
        </>
    )
}

export { DepoimentoModal }

