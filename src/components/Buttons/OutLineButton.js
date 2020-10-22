import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonText } from '../Texts'
import { Base, Colors } from '../../styles'

const OutLineButton = ({ title, style, onPress, ...props }) => {
    return (
        <TouchableOpacity
            activeOpacity={.75}
            onPress={onPress}
            style={{
                ...Base.outLineButton,
                ...style
            }}
            {...props}
        >
            <ButtonText
                style={{ color: Colors.vinho000 }}
            >
                {title}
            </ButtonText>
        </TouchableOpacity>
    )
}

export { OutLineButton }