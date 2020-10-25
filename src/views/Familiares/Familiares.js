import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'

import { ContentEditableButton, CaptionText, Modal, TitleText, OutLineButton } from '../../components'
import { getAllFamiliaresByUser, deleteFamiliar } from '../../services'
import { getData } from '../../utils'
import { GRAU_FAMILIAR } from '../../constants'

import { styles } from './styles'
import { FamiliarContex } from '../../context'
import { FAMILIAR_ACTIONS } from '../../reducers'

const Familiares = (props) => {


    const { familiarState, dispatch } = useContext(FamiliarContex)

    const [selectedFamiliar, setSelectedFamiliar] = useState(0)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getData('userData').then((cache) => {

        })
    }, [])

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

    const handleOpenModal = (idFamiliar) => {
        setSelectedFamiliar(idFamiliar)
        setModal(true)
    }

    const handleExcluirDepoimento = () => {
        getData('userData').then((cache) => {
            deleteFamiliar(selectedFamiliar, cache.token).then(_ => {
                dispatch({
                    type: FAMILIAR_ACTIONS.DELETE_FAMILIAR,
                    payload: selectedFamiliar
                })

                if (familiarState.familiares.length === 1) {
                    props.navigation.navigate('Home')
                }
                else {
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
                                onPress={() => handleOpenModal(familiar.cod)}
                                style={styles.familiarContainer}
                            >
                                {
                                    renderDescFamilar(familiar)
                                }
                            </ContentEditableButton>
                        )
                    })
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
                            onPress={() => { }}
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
        </>
    )
}


export { Familiares }