import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const Caption = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.caption, ...style }} >{props.children}</Text>
}

export { Caption }