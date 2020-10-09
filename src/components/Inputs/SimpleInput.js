import React, { useState } from 'react'
import { TextInput, Keyboard } from 'react-native'
import { Base } from '../../styles'

const SimpleInput = ({ style, value, onChangeText, placeholder, ...props }) => {



    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value} 
            onChangeText={onChangeText}
            placeholder={placeholder}
            {...props}
        />
    )
}

export { SimpleInput }