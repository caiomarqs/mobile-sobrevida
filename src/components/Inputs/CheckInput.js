import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { OverLine } from '../Texts'
import { Colors, Base } from '../../styles'

const CheckInput = ({ label, style, onPress = () => { }, ...props }) => {

    const [checked, setChecked] = useState(false)

    return (
        <TouchableOpacity
            style={{ ...Base.checkInput, ...style }}
            activeOpacity={.6}
            onPress={() => {
                setChecked(!checked)
                onPress()
            }}
        >
            <View style={[{ ...Base.checkInputCheck }, checked && { backgroundColor: Colors.vinho000 }]} />
            <OverLine>{label}</OverLine>
        </TouchableOpacity>
    )
}

export { CheckInput }