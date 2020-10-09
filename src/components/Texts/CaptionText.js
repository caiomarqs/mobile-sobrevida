import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const CaptionText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.caption, ...style }} >{props.children}</Text>
}

export { CaptionText }