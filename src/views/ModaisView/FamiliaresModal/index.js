import React, { useState } from 'react'
import { Image, View } from 'react-native'

import { CaptionText, TextButton } from '../../../components'
import FamilyImage from '../../../assets/img/familyIlustrationModal.png'

import { ModalHandleFamiliar } from '../../Familiares/ModalHandleFamiliar'

import { styles } from './styles'

const FamiliaresModal = (props) => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <View style={styles.container}>
                <Image source={FamilyImage} style={styles.image} />
                <CaptionText style={styles.content}>
                    Você não tem nenhum familiar cadastrado, cadastre pelo menos um familiar para q ele saiba de sua vontade.
                </CaptionText>
                <TextButton
                    title="Cadastrar Familiar"
                    onPress={() => setModal(true)}
                />
            </View>


            <ModalHandleFamiliar
                close={() => setModal(false)}
                naviagtion={props.navigation}
                show={modal}
            />
        </>
    )
}

export { FamiliaresModal }