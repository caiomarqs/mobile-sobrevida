import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Colors } from '../../styles'

import { CaptionBoldText } from '../Texts'


const TextButton = ({onPress, title, enable = true, ...props}) => {
    return (
        <TouchableOpacity onPress={enable ? onPress : () => {}} activeOpacity={enable ? .6 : 1} {...props}>
            <CaptionBoldText style={{ color: enable ? Colors.vinho000 : Colors.cinza200 }}>{title}</CaptionBoldText>
        </TouchableOpacity>
    )
}

export { TextButton }