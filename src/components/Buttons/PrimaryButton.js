import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonText } from '../Texts'
import { Base, Colors } from '../../styles'


const PrimaryButton = ({ title, style, onPress, ...props }) => {
    return (
        <TouchableOpacity
            activeOpacity={.75}
            onPress={onPress}
            style={{
                ...Base.primaryButton,
                ...style
            }}
            {...props}
        >
            <ButtonText
                style={{ color: Colors.branco000 }}
            >
                {title}
            </ButtonText>
        </TouchableOpacity>
    )
}

export { PrimaryButton }