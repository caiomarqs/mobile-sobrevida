import React, { useContext, useEffect, useState } from 'react'

import { StackNavigator, Stack, colorHeader } from '../components'
import { Login, Cadastro, Initial, ForgotPass } from '../views'
import { AuthContext, AUTH_ACTIONS } from '../context'
import { getData } from '../utils'
import { Colors } from '../styles'

const SheelRoutes = () => {

    const { authState, dispatch } = useContext(AuthContext)
    const [loadinData, setLoadingData] = useState(false)

    useEffect(() => {
        getData('keepLogin').then((data) => {
            
            if (data === true) {
                dispatch({ type: AUTH_ACTIONS.LOGIN })
            }
            
            setLoadingData(true)
        })

    }, [])


    return (
        <>
            {
                (!authState.isAuth && loadinData)
                &&
                <StackNavigator initialRouteName="Initial">
                    <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={(props) => ({ ...props, ...colorHeader, cardStyle: { backgroundColor: Colors.vinho000 } })} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                    <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ title: 'Esqueçeu a senha' }} />
                </StackNavigator>
            }
        </>
    )
}

export { SheelRoutes }