import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'

import { SobrevidaLogoFull, TextSubTitle2, StatusBarColor } from '../../components'
import { styles } from './styles'
import { Colors } from '../../styles'

const Initial = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBarColor backgroundColor={Colors.vinho000} />

            {/* Titulo da view inicial */}
            <View style={styles.headerContainer}>
                <SobrevidaLogoFull style={styles.logoHeader} />
                <TextSubTitle2 style={styles.title}>Plante vidas novas!</TextSubTitle2>
            </View>

            {/* Imagem da view inicial */}
            <View style={styles.brandingContainer}>
                <Image
                    source={require('../../assets/img/initialCoverImage.png')}
                    style={styles.backgroundImage}
                />
            </View>

            {/* Botoes da view inical */}
            <View style={styles.btnsContainer}>
                {/* Botao para ir para o login */}
                <TouchableOpacity
                    style={styles.btnLoginContainer}
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <TextSubTitle2 style={styles.btnText}>Faça seu login</TextSubTitle2>
                </TouchableOpacity>
                
                {/* Botao para ir para o cadastro */}
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Cadastro')}
                >
                    <TextSubTitle2 style={styles.btnText}>Torne-se um doador!</TextSubTitle2>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export { Initial }