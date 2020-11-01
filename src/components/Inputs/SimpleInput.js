import React from 'react'
import { TextInput } from 'react-native'
import { Base } from '../../styles'

const SimpleInput = ({
    forwardRef,
    keyboardType,
    onChangeText,
    onSubmitEditing,
    placeholder,
    style,
    value,
    ...props
}) => {
    return (
        <TextInput
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            ref={forwardRef}
            style={{
                ...Base.inputContainer,
                ...style
            }}
            value={value}
            {...props}
        />
    )
}

export { SimpleInput }