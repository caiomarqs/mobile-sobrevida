import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const LinksText = ({ style, ...props }) => {
    return <Text style={{ ...Fonts.links, ...style }} >{props.children}</Text>
}

export { LinksText }