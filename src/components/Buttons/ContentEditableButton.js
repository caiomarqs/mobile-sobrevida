import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Base, Colors } from '../../styles'

import { LinksText } from '../Texts'
import { PointsIcon } from '../Icons'

import { styles } from './styles'

const ContentEditableButton = ({ style, onPress = () => { }, title = '', ...props }) => {
    return (
        <View style={{
            ...Base.contentEditableButton,
            ...style
        }} >



            <View style={{ flex: 1 }}>
                {
                    title !== ''
                    && <LinksText style={styles.title}>{title}</LinksText>
                }
                {props.children}
            </View>


            <TouchableOpacity
                activeOpacity={.6}
                onPress={onPress}
            >
                <PointsIcon fill={Colors.vinho000} />
            </TouchableOpacity>
        </View>
    )
}

export { ContentEditableButton }