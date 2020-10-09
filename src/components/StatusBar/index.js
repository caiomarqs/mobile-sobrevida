import React from 'react';
import { View, StatusBar } from 'react-native';

import { styles } from './styles';

const StatusBarColor = ({ backgroundColor, hasHeader = false, barStyle, ...props }) => {
    return (
        //Se tiver o header não precisa definir o tamnho da status bar
        <View style={{
            ...styles.statusBar,
            backgroundColor,
            height: hasHeader ? 0 : styles.statusBar.height
        }}>
            <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} {...props} />
        </View>
    )
}

export { StatusBarColor }