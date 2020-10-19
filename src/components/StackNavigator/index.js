import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack'

import { Fonts, Base, Colors } from '../../styles'
import { LeftArrow } from '../Icons'

const Stack = createStackNavigator()

/**
 * Propriedades de transição de telas
 */
const HorizontalTransition = {
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
                                outputRange: [1, .9], //Zoom de saida da tela anterior
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

    gestureDirection: 'horizontal',
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,

    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    }
}

const whiteHeader = {
    headerBackImage: () => (
        <LeftArrow fill={Base.whiteNavigator.contentColor} />
    ),
    headerStyle: {
        backgroundColor: Base.whiteNavigator.backgroundColor,
        elevation: 0, // remove sombra no Android
        shadowOpacity: 0, //remove no IOS
    },
    headerTintColor: Base.whiteNavigator.contentColor,
}

const colorHeader = {
    headerBackImage: () => (
        <LeftArrow fill={Base.colorNavigator.contentColor} />
    ),
    headerStyle: {
        backgroundColor: Base.colorNavigator.backgroundColor,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTintColor: Base.colorNavigator.contentColor,
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
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: Colors.branco000
                },
                gestureEnabled: true,
                headerTitleStyle: {
                    ...Fonts.sub2,
                    alignSelf: 'flex-end',
                },
                ...whiteHeader,
                ...HorizontalTransition
            }}
            {...props}
        >
            {props.children}
        </Stack.Navigator>
    )
}

export { StackNavigator, Stack, whiteHeader, colorHeader }