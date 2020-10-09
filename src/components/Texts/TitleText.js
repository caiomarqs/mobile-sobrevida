import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const TitleText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.h6, ...style }} >{props.children}</Text>
}

export { TitleText }