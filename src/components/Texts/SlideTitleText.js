import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const SlideTitleText = ({ style, ...props }) => {
    return (
        <Text
            style={{
                ...Fonts.body2,
                ...style
            }}
        >
            {props.children}
        </Text>
    )
}

export { SlideTitleText }