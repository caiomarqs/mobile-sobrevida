import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'

import {
    CaptionText,
    SobrevidaLogoFull,
    SubTitleBoldText,
    StatusBarColor
} from '../../components'

import { styles } from './styles'

const Initial = (props) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBarColor backgroundColor={'transparent'} />

            <View style={styles.headerContainer}>
                <SobrevidaLogoFull style={styles.logoHeader} />
                <SubTitleBoldText style={styles.title}>Plante vidas novas!</SubTitleBoldText>
            </View>

            <View style={styles.brandingContainer}>
                <Image
                    source={require('../../assets/img/initialCoverImageOriginal.png')}
                    style={styles.backgroundImage}
                />
            </View>

            <View style={styles.btnsContainer}>
                <TouchableOpacity
                    activeOpacity={.75}
                    style={styles.btnLoginContainer}
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <CaptionText style={styles.btnText}>Faça seu login</CaptionText>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={.75}
                    onPress={() => props.navigation.navigate('Cadastro')}
                >
                    <CaptionText style={styles.btnText}>Torne-se um doador!</CaptionText>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export { Initial }