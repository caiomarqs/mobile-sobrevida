import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Base } from '../../styles'

const PassInput = ({ style, value, onChangeText, placeholder, ...props }) => {

    const [focus, setFocus] = useState(false)

    return (
        <TextInput
            style={{ ...Base.inputContainer, ...style }}
            value={value} onChangeText={onChangeText}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={focus ? '' : placeholder}
            secureTextEntry={focus ? true : false} 
            {...props}
        />
    )
}

export { PassInput }