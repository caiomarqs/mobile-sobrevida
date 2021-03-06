import React from 'react';
import { View, StatusBar } from 'react-native';

import { styles } from './styles';

const StatusBarColor = ({ backgroundColor, barStyle, hasHeader = false, ...props }) => {
    return (
        //Se tiver o header não precisa definir o tamnho da status bar
        <View style={{
            ...styles.statusBar,
            backgroundColor,
            height: hasHeader ? 0 : styles.statusBar.height
        }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={barStyle}
                translucent
                {...props}
            />
        </View>
    )
}

export { StatusBarColor }