import React from 'react'
import { View, Image } from 'react-native'

import HandImage from '../../assets/img/handIlustration.png'
import { CaptionText, TextButton } from '../../components'

import { styles } from './styles'

const DepoimentoModal = (props) => {
    return (
        <View style={styles.container}>
            <Image source={HandImage} style={styles.image} />
            <CaptionText style={styles.content}>Você não tem depoimento cadastrado cadastre seu depoimento.</CaptionText>
            <TextButton
                title="Cadastrar Depoimento"
                onPress={() => props.navigation.navigate('Depoimento')}
            />
        </View>
    )
}

export { DepoimentoModal }

