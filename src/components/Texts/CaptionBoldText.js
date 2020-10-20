import React from 'react'
import { Text } from 'react-native'

import { Fonts } from '../../styles'

const CaptionBoldText = ({ style, ...props }) => {
    return (
        <Text
            style={{
                ...Fonts.caption3,
                ...style
            }}
        >
            {props.children}
        </Text>
    )
}

export { CaptionBoldText }