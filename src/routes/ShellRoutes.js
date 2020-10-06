import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, Cadastro } from '../views'
import { AuthContext } from '../context'

const Stack = createStackNavigator();

const SheelRoutes = () => {

    const { authState } = useContext(AuthContext)
    
    return (
        <>
            {
                !authState.isAuth
                &&
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                </Stack.Navigator>
            }
        </>
    )
}

export { SheelRoutes }