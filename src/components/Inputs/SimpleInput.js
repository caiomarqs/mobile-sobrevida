import React, { useState } from 'react'
import { TextInput, Keyboard } from 'react-native'
import { Base } from '../../styles'

const SimpleInput = ({ style, value, onChangeText, placeholder, ...props }) => {

    const [focus, setFocus] = useState(false)

    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value} 
            onChangeText={onChangeText}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={focus ? '' : placeholder}
            {...props}
        />
    )
}

export { SimpleInput }