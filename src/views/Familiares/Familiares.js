import React, { useContext, useState } from 'react'
import { View, SafeAreaView } from 'react-native'

import {
    ContentEditableButton,
    CaptionText,
    Modal,
    OutLineButton,
    TextButton,
    TitleText
} from '../../components'
import { deleteFamiliar } from '../../services'
import { getData } from '../../utils'
import { GRAU_FAMILIAR } from '../../constants'
import { FamiliarContex } from '../../context'
import { FAMILIAR_ACTIONS } from '../../reducers'

import { ModalHandleFamiliar } from './ModalHandleFamiliar'
import { styles } from './styles'

const Familiares = (props) => {


    const { familiarState, dispatch } = useContext(FamiliarContex)

    const [idFamiliar, setIdFamiliar] = useState(0)
    const [selectedFamiliar, setSelectedFamiliar] = useState({})
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)


    const renderDescFamilar = (familiar) => {
        const grau = GRAU_FAMILIAR.filter(g => (
            g.value === familiar.parentesco
        ))

        return (
            <CaptionText>
                {
                    grau[0].value === "OUTRO"
                        ? familiar.descParentesco
                        : grau[0].label
                }
            </CaptionText>
        )
    }

    const handleOpenModal = (idFamiliar, familiar) => {
        setIdFamiliar(idFamiliar)
        setSelectedFamiliar(familiar)
        setModal(true)
    }

    const handleExcluirDepoimento = () => {
        getData('userData').then((cache) => {
            deleteFamiliar(idFamiliar, cache.token).then(_ => {
                dispatch({
                    type: FAMILIAR_ACTIONS.DELETE_FAMILIAR,
                    payload: idFamiliar
                })

                if (familiarState.familiares.length === 1) {
                    props.navigation.navigate('Home')
                }
                else {
                    setModal(false)
                    props.navigation.navigate('Familiares')
                }
            })
        })
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                {
                    familiarState.familiares.map((familiar, i) => {
                        return (
                            <ContentEditableButton
                                key={i}
                                title={`${familiar.nome} ${familiar.sobreNome}`}
                                onPress={() => handleOpenModal(familiar.cod, familiar)}
                                style={styles.familiarContainer}
                            >
                                {
                                    renderDescFamilar(familiar)
                                }
                            </ContentEditableButton>
                        )
                    })
                }
                {
                    familiarState.familiares.length < 3
                    &&
                    <TextButton
                        onPress={() => setModalAdd(true)}
                        style={styles.addButton}
                        title="Adicionar Familar"
                    />
                }

            </SafeAreaView>

            <Modal
                show={modal}
                close={() => setModal(false)}
                height='30%'
            >
                <View style={styles.modal}>

                    <TitleText style={styles.modalTitle}>
                        Opções Do Familiar
                    </TitleText>

                    <View style={styles.modalButtonsContainer}>
                        <OutLineButton
                            onPress={() => {
                                setModal(false)
                                setModalEdit(true)
                            }}
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

            {
                Object.keys(selectedFamiliar).length > 0
                &&
                <ModalHandleFamiliar
                    close={() => setModalEdit(false)}
                    familiar={selectedFamiliar}
                    naviagtion={props.navigation}
                    show={modalEdit}
                />
            }


            {
                familiarState.familiares.length < 3
                &&
                <ModalHandleFamiliar
                    naviagtion={props.navigation}
                    close={() => setModalAdd(false)}
                    show={modalAdd}
                />
            }

        </>
    )
}


export { Familiares }