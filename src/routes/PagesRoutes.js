import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthContext } from '../context'
import { Home } from '../views'

const Stack = createStackNavigator()

const PageRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                authState.isAuth
                &&
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            }
        </>
    )
}

export { PageRoutes } 