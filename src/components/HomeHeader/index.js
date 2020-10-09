import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { TextSubTitle2 } from '../Texts'
import { SobreVidaHeaderLogo } from '../Icons'
import { Colors } from '../../styles'

import { styles } from './styles'

const HomeHeader = ({ logOut, props }) => {
    return (
        <View style={styles.headerContainer}>
            <SobreVidaHeaderLogo fill={Colors.preto000} />
            <TouchableOpacity onPress={logOut} activeOpacity={.75}>
                <TextSubTitle2 style={styles.logOutContainer}>Sair</TextSubTitle2>
            </TouchableOpacity>
        </View>
    )
}

export { HomeHeader }