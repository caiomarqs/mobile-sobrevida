import React, { useState } from 'react'
import { TextInput, KeyboardTypeOptions } from 'react-native'
import { Base } from '../../styles'

const SimpleInput = ({ style, value, onChangeText, placeholder, keyboardType, forwardRef, onSubmitEditing, ...props }) => {
    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            ref={forwardRef}
            onSubmitEditing={onSubmitEditing}
            {...props}
        />
    )
}

export { SimpleInput }