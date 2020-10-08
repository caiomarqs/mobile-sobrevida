import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const TextSubTitle2 = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.sub2, ...style }}>{props.children}</Text >
}

export { TextSubTitle2 }