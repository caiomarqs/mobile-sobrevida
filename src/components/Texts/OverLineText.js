import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const OverLineText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.overline, ...style }} >{props.children}</Text>
}

export { OverLineText }