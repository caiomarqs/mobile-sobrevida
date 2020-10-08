import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const ButtonText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.btnFont, ...style }} >{props.children.toUpperCase()}</Text>
}

export { ButtonText }