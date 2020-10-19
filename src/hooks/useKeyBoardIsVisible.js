import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

/**
 * *Hook* que recupera a codição de visibidade do teclado,
 * usado para comportamentos da tela quando o teclado é aberto ou fechado.
 */
const useKeyBoardIsVisible = () => {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true)
        })

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false)
        })

        return () => {
            keyboardDidHideListener.remove()
            keyboardDidShowListener.remove()
        }
    }, [])

    return isKeyboardVisible
}

export { useKeyBoardIsVisible }