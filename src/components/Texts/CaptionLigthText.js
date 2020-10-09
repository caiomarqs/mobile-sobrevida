import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const CaptionLigthText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.caption2, ...style }} >{props.children}</Text>
}

export { CaptionLigthText }