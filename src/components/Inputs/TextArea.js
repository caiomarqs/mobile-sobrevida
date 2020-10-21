import React from 'react'
import { TextInput } from 'react-native'

import { Base } from '../../styles'

const TextArea = ({style, onChangeText = () => {}}) => {
    return (
        <TextInput
            maxLength={200}
            numberOfLines={4}
            multiline
            textAlignVertical="top"
            style={{
                ...Base.textArea,
                ...style
            }}
            onChangeText={onChangeText}
        />
    )
}

export { TextArea }