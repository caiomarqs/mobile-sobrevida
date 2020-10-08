import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Base } from '../../styles'

const PassInput = ({ style, value, onChangeText, placeholder, ...props }) => {

    const [focus, setFocus] = useState(false)
    const [inputValue, setInputValue] = useState('')

    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value}
            onChangeText={(value) => {
                onChangeText(value)
                setInputValue(value)
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={focus ? '' : placeholder}
            secureTextEntry={focus || (inputValue !== '') ? true : false} 
            {...props}
        />
    )
}

export { PassInput }