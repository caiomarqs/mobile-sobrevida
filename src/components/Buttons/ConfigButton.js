import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { CaptionText, LinksText } from '../Texts'
import { SimpleArrow } from '../Icons'

import { styles } from './styles'

const ConfigButton = ({ title, content, isAction = true, style, onPress, ...props }) => {

    if (isAction) {
        return (
            <TouchableOpacity
                activeOpacity={.6}
                style={{
                    ...styles.container,
                    ...style
                }}
                onPress={onPress}
            >
                <View style={styles.contentContainer}>
                
                    <LinksText
                        style={styles.title}
                    >
                        {title}
                    </LinksText>
                    <CaptionText>
                        {content}
                    </CaptionText>
                
                </View>

                <SimpleArrow />

            </TouchableOpacity>
        )
    }
    
    else {
        return (
            <View style={styles.container}>
                
                <View style={styles.contentContainer}>
                   
                    <LinksText
                        style={styles.title}
                    >
                        {title}
                    </LinksText>
                    <CaptionText>
                        {content}
                    </CaptionText>
                    
                </View>

            </View>
        )
    }


}

export { ConfigButton }
