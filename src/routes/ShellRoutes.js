import React, { useContext } from 'react'

import { StackNavigator, Stack, colorHeader } from '../components'
import { Login, Cadastro, Initial, ForgotPass } from '../views'
import { AuthContext } from '../context'
import { Colors } from '../styles'

const SheelRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                !authState.isAuth
                &&
                <StackNavigator initialRouteName="Initial">
                    <Stack.Screen name="Initial"    component={Initial}  options={{ headerShown: false }} />
                    <Stack.Screen name="Login"      component={Login}    options={(props) => ({ ...props, ...colorHeader, cardStyle: { backgroundColor: Colors.vinho000 } })} />
                    <Stack.Screen name="Cadastro"   component={Cadastro} />
                    <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ title: 'Esqueçeu a senha' }} />
                </StackNavigator>
            }
        </>
    )
}

export { SheelRoutes }