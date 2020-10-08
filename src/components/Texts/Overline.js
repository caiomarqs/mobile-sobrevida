import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const OverLine = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.overline, ...style }} >{props.children}</Text>
}

export { OverLine }