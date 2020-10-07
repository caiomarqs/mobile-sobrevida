import React, { useContext } from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack'

import { Colors, Fonts, Base } from '../../styles'
import { LeftArrow } from '../Icons'

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
}

const whiteHeader = {
    headerBackImage: () => (<LeftArrow fill={Base.whiteNavigator.contentColor} />),
    headerStyle: {
        backgroundColor: Base.whiteNavigator.backgroundColor,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, //remove on IOS
    },
    headerTintColor: Base.whiteNavigator.contentColor,
}

const colorHeader = {
    headerBackImage: () => (<LeftArrow fill={Base.colorNavigator.contentColor} />),
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
                headerTitleStyle: {
                    ...Fonts.sub2,
                    alignSelf: 'flex-end',
                },
                cardOverlayEnabled: true,
                gestureEnabled: true,
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