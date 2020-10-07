import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack'

import { Colors, Fonts } from '../../styles'

const Stack = createStackNavigator()

/**
 * Propriedades de transição de telas
 */
const HorizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, .925], //Zoom de saida da tela anterior
                            })
                            : 1,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1], //Cor do backdrop
                })
            },
        }
    },
}

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
                },
                cardOverlayEnabled: true,
                gestureEnabled: true,
                ...HorizontalTransition,
            }}
            {...props}
        >
            {props.children}
        </Stack.Navigator>
    )
}

export { StackNavigator, Stack }