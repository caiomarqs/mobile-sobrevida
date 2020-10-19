import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { SubTitleBoldText } from '../Texts'
import { SobreVidaHeaderLogo } from '../Icons'
import { Colors } from '../../styles'

import { styles } from './styles'

const HomeHeader = ({ logOut, props }) => {
    return (
        <View style={styles.headerContainer}>
            <SobreVidaHeaderLogo fill={Colors.preto000} />
            <TouchableOpacity
                activeOpacity={.75}
                onPress={logOut}
            >
                <SubTitleBoldText style={styles.logOutContainer}>Sair</SubTitleBoldText>    
            </TouchableOpacity>
        </View>
    )
}

export { HomeHeader }