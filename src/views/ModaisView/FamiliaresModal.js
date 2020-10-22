import React from 'react'
import { View, Image } from 'react-native'

import HandImage from '../../assets/img/familyIlustrationModal.png'
import { CaptionText, TextButton } from '../../components'

import { styles } from './styles'

const FamiliaresModal = (props) => {
    return (
        <View style={styles.container}>
            <Image source={HandImage} style={styles.image} />
            <CaptionText style={styles.content}>Você não tem nenhum familiar cadastrado, cadastre pelo menos um familiar para q ele saiba de sua vontade.</CaptionText>
            <TextButton
                title="Cadastrar Familiar"
                onPress={() => props.navigation.navigate('Familiares')}
            />
        </View>
    )
}

export { FamiliaresModal }