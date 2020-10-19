import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Base } from '../../styles'

const PassInput = ({
    forwardRef,
    onChangeText = () => { },
    onSubmitEditing,
    placeholder,
    style,
    value,
    ...props
}) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <TextInput
            onChangeText={(value) => {
                onChangeText(value)
                setInputValue(value)
            }}
            
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            ref={forwardRef}
            secureTextEntry={inputValue !== '' ? true : false}
            
            style={{
                ...Base.inputContainer,
                ...style
            }}
            
            value={value}

            {...props}
        />
    )
}

export { PassInput }