import React, { useContext, useState } from 'react'
import {
    Image,
    Keyboard,
    SafeAreaView,
    TouchableOpacity,
    View
} from 'react-native'

import {
    CaptionText,
    Modal,
    TextArea,
    TitleText,
    OutLineButton,
    PrimaryButton,
    PointsIcon
} from '../../components'
import { UserContext } from '../../context'
import { USER_ACTIONS } from '../../reducers'
import { Colors } from '../../styles'
import { putDepoimentoUser, deleteDepoimentoUser } from '../../services'
import { getData } from '../../utils'
import document from '../../assets/img/documentIlustration.png'

import { styles } from './styles'

const Depoimento = (props) => {

    const { userState, dispatch } = useContext(UserContext)


    const [depoimento, setDepoimento] = useState('')

    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)

    const handleEdit = () => {
        setModal(false)
        setModalEdit(true)
    }

    const handleSalvarDepoimento = () => {
        if (depoimento !== '') {
            getData('userData').then((cache) => {
                putDepoimentoUser(cache.id, depoimento, cache.token).then(({ data }) => {

                    dispatch({
                        type: USER_ACTIONS.SET_DATA,
                        payload: { ...userState.user, depoimento: data }
                    })

                    setDepoimento('')
                    setModalEdit(false)

                }).catch(_ =>
                    alert('Não foi possivel salvar o depoimento no servidor')
                )

            }).catch(_ =>
                alert('Não foi possivel salvar o depoimento para o seu usuário')
            )

        } else {
            alert('O depoimento não pode estar vazio')
        }
    }

    const handleExcluirDepoimento = () => {
        getData('userData').then((cache) => {

            deleteDepoimentoUser(cache.id, cache.token).then(_ => {
                dispatch({
                    type: USER_ACTIONS.SET_DATA,
                    payload: { ...userState.user, depoimento: null }
                })
                props.navigation.navigate('Home')

            }).catch(_ =>
                alert('Não foi possivel excluir o depoimento no servidor')
            )

        }).catch(_ =>
            alert('Não foi possivel excluir o depoimento para o seu usuário')
        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <View style={styles.container} >
                <Image
                    source={document}
                    style={styles.image}
                />

                <CaptionText style={styles.title} >
                    Veja e edite o seu depoimento.
                </CaptionText>
                <View style={styles.depoimentoContainer} >

                    <CaptionText style={styles.depoimentoText} >
                        {userState.user.depoimento ? userState.user.depoimento.depoimento : ''}
                    </CaptionText>
                    <TouchableOpacity
                        activeOpacity={.6}
                        onPress={() => setModal(true)}
                    >
                        <PointsIcon fill={Colors.vinho000} />
                    </TouchableOpacity>

                </View>
            </View>

            <Modal show={modal} close={() => setModal(false)} height='30%' >
                <View style={styles.modal}>

                    <TitleText style={styles.modalTitle}>
                        Opções Do Depoimento
                    </TitleText>

                    <View style={styles.modalButtonsContainer}>
                        <OutLineButton
                            onPress={() => handleEdit()}
                            style={styles.modalOutLineButton1}
                            title="Editar"
                        />
                        <OutLineButton
                            onPress={() => handleExcluirDepoimento()}
                            style={styles.modalOutLineButton2}
                            title="Excluir"
                        />
                    </View>
                </View>
            </Modal>

            <Modal
                close={() => setModalEdit(false)}
                show={modalEdit}
            >
                <View style={styles.modal}>

                    <TitleText style={styles.modalTitle}>
                        Edite as palavras para seus familiares
                    </TitleText>
                    <TextArea
                        onChangeText={(text) => setDepoimento(text)}
                        onEndEditing={() => Keyboard.dismiss()}
                        style={styles.textArea}
                        placeholder='Digite a menssagem...'
                        value={depoimento}
                    />

                </View>

                <PrimaryButton
                    onPress={() => handleSalvarDepoimento()}
                    title="Salvar"
                    style={styles.modalButton}
                />

            </Modal>
        </SafeAreaView>
    )
}

export { Depoimento }