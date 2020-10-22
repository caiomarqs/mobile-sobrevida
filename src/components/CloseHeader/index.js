import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { CloseIcon } from '../Icons'

import { styles } from './styles'

const CloseHeader = ({ back, props }) => {
    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity
                activeOpacity={.75}
                onPress={back}
            >
                <CloseIcon />
            </TouchableOpacity>
        </View>
    )
}

export { CloseHeader }