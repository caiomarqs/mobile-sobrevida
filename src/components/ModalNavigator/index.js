import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Fonts, Base, Colors } from '../../styles'
import { LeftArrow, CloseIcon } from '../Icons'

const ModalStack = createStackNavigator()


const ModalNavigator = ({isModal, ...props}) => {

    return (
        <ModalStack.Navigator
            mode="modal"
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
                headerStyle: {
                    backgroundColor: Base.whiteNavigator.backgroundColor,
                    elevation: 0, 
                    shadowOpacity: 0,
                },
                headerTintColor: Base.whiteNavigator.contentColor,
                headerBackImage: () => (
                    <LeftArrow fill={Base.whiteNavigator.contentColor}/>
                )
            }}
            {...props}
        >
            {props.children}
        </ModalStack.Navigator>
    )
}

export { ModalNavigator, ModalStack }