import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'

import { SobrevidaLogoFull, TextSubTitle2, StatusBarColor, Caption } from '../../components'
import { styles } from './styles'

const Initial = (props) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBarColor backgroundColor={'transparent'} />

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
                    activeOpacity={.75}
                    style={styles.btnLoginContainer}
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <Caption style={styles.btnText}>Faça seu login</Caption>
                </TouchableOpacity>

                {/* Botao para ir para o cadastro */}
                <TouchableOpacity
                    activeOpacity={.75}
                    onPress={() => props.navigation.navigate('Cadastro')}
                >
                    <Caption style={styles.btnText}>Torne-se um doador!</Caption>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export { Initial }