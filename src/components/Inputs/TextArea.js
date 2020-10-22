import React from 'react'
import { TextInput } from 'react-native'

import { Base } from '../../styles'

const TextArea = ({ style, placeholder = '', forwardRef, onChangeText = () => { }, onEndEditing = () => { }, ...props }) => {
    return (
        <TextInput
            maxLength={200}
            multiline
            textAlignVertical="top"
            style={{
                ...Base.textArea,
                ...style
            }}
            onChangeText={onChangeText}
            placeholder={placeholder}
            ref={forwardRef}
            onEndEditing={onEndEditing}
            {...props}
        />
    )
}

export { TextArea }