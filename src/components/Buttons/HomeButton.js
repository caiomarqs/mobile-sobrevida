import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { LinksText } from '../Texts'
import { Base, Colors } from '../../styles'


const HomeButton = ({ icon, title, style, navigation, route, ...props }) => {
    return (
        <TouchableOpacity style={{ ...Base.homeButton, ...style }} activeOpacity={.6} onPress={() => navigation.navigate(route)}>
            <View style={{ marginBottom: 24 }}>{icon}</View>
            <LinksText style={{ color: Colors.vinho000 }}>{title}</LinksText>
        </TouchableOpacity>
    )
}

export { HomeButton }