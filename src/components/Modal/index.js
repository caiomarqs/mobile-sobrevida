import React, { useState, useEffect } from 'react'
import { Animated, View, TouchableOpacity } from 'react-native'

import { Colors, Heigths } from '../../styles'
import { CloseIcon } from '../Icons'

import { styles } from './styles'

const Modal = ({ show, close, style, height, ...props }) => {

    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(Heigths.WINDOW_HEIGHT),
        modal: new Animated.Value(Heigths.WINDOW_HEIGHT)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 2, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: Heigths.WINDOW_HEIGHT, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.container, { toValue: Heigths.WINDOW_HEIGHT, duration: 100, useNativeDriver: true })
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    return (
        <Animated.View
            style={{
                ...styles.container,
                opacity: state.opacity,
                transform: [
                    { translateY: state.container }
                ]
            }}
        >
            <Animated.View
                style={{
                    ...styles.modal,
                    transform: [
                        { translateY: state.modal }
                    ],
                    height: height ?? '50%'
                }}
                onTouchStart={() => { }}
            >
                <TouchableOpacity
                    activeOpacity={.75}
                    onPress={() => close()}
                    style={styles.closeContainer}
                >
                    <CloseIcon fill={Colors.cinza200} />
                </TouchableOpacity>
                {props.children}
            </Animated.View>
        </Animated.View >
    )
}

export { Modal }