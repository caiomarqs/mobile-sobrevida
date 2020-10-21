import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Colors } from '../../styles'

import { CaptionBoldText } from '../Texts'


const TextButton = ({onPress, title, ...props}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <CaptionBoldText style={{ color: Colors.vinho000 }}>{title}</CaptionBoldText>
        </TouchableOpacity>
    )
}

export { TextButton }