import React from 'react'
import { View } from 'react-native'

import { Colors } from '../../styles'

const HairLine = ({ color, style, ...props }) => {
    return <View style={{ ...style, borderBottomWidth: .8, borderBottomColor: color ?? Colors.cinza000 }} />
}

export { HairLine }