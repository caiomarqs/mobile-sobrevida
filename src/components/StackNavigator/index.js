import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Colors, Fonts } from '../../styles'

const Stack = createStackNavigator();

/**
 * Esse *StackNavigator* tem as configurações de navegação da aplcaicação, 
 * por isso exporta o *Stack* junto como o Navigator
 * @param {*} props 
 */
const StackNavigator = (props) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0, // remove shadow on Android
                    shadowOpacity: 0, //remove on IOS
                },
                headerTintColor: Colors.preto000,
                headerTitleStyle: {
                    ...Fonts.sub2,
                    alignSelf: 'flex-end'
                }

            }}
            {...props}
        >
            {props.children}
        </Stack.Navigator>
    )
}

export { StackNavigator, Stack }