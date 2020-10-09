import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'

import { SobrevidaLogoFull, SubTitleBoldText, StatusBarColor, CaptionText } from '../../components'
import { styles } from './styles'

const Initial = (props) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBarColor backgroundColor={'transparent'} />

            {/* Titulo da view inicial */}
            <View style={styles.headerContainer}>
                <SobrevidaLogoFull style={styles.logoHeader} />
                <SubTitleBoldText style={styles.title}>Plante vidas novas!</SubTitleBoldText>
            </View>

            {/* Imagem da view inicial */}
            <View style={styles.brandingContainer}>
                <Image
                    source={require('../../assets/img/initialCoverImageOriginal.png')}
                    style={styles.backgroundImage}
                />
            </View>

            {/* Botoes da view inical */}
            <View style={styles.btnsContainer}>
                {/* Botao para ir para o login */}
                <TouchableOpacity
                    activeOpacity={.75}
                    style={styles.btnLoginContainer}
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <CaptionText style={styles.btnText}>Faça seu login</CaptionText>
                </TouchableOpacity>

                {/* Botao para ir para o cadastro */}
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