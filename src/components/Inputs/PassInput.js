import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Base } from '../../styles'

const PassInput = ({ style, value, onChangeText = () => { }, placeholder, forwardRef, onSubmitEditing, ...props }) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value}
            onChangeText={(value) => {
                onChangeText(value)
                setInputValue(value)
            }}
            placeholder={placeholder}
            secureTextEntry={inputValue !== '' ? true : false}
            ref={forwardRef}
            onSubmitEditing={onSubmitEditing}
            {...props}
        />
    )
}

export { PassInput }