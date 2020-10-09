import React, { useContext } from 'react'

import { AuthContext } from '../context'
import { Home, Familiares, Depoimento, Configuracoes } from '../views'
import { StackNavigator, Stack } from '../components'


const PageRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                authState.isAuth
                &&
                <StackNavigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Familiares" component={Familiares} />
                    <Stack.Screen name="Depoimento" component={Depoimento} />
                    <Stack.Screen name="Configuracoes" component={Configuracoes} />
                </StackNavigator>
            }
        </>
    )
}

export { PageRoutes } 