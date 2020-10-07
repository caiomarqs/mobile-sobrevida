import React, { useContext } from 'react'

import { StackNavigator, Stack } from '../components'
import { Login, Cadastro, Initial } from '../views'
import { AuthContext } from '../context'

const SheelRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                !authState.isAuth
                &&
                <StackNavigator initialRouteName="Initial">
                    <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                </StackNavigator>
            }
        </>
    )
}

export { SheelRoutes }