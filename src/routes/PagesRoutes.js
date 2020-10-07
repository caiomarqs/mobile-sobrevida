import React, { useContext } from 'react'

import { AuthContext } from '../context'
import { Home } from '../views'
import { StackNavigator, Stack } from '../components'


const PageRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                authState.isAuth
                &&
                <StackNavigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                </StackNavigator>
            }
        </>
    )
}

export { PageRoutes } 