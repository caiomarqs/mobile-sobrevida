import React, { useContext } from 'react'

import { AuthContext, UserProvider } from '../context'
import { Home, Familiares, Depoimento, Configuracoes, ChangePass, DeleteAccount } from '../views'
import { StackNavigator, Stack } from '../components'


const PageRoutes = () => {

    const { authState } = useContext(AuthContext)

    return (
        <>
            {
                authState.isAuth
                &&
                <UserProvider>
                    <StackNavigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name="Familiares" component={Familiares} />
                        <Stack.Screen name="Depoimento" component={Depoimento} />
                        <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações' }} />
                        <Stack.Screen name="ChangePass" component={ChangePass} options={{ title: 'Alterar senha' }} />
                        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{ title: 'Deletar Conta' }} />
                    </StackNavigator>
                </UserProvider>
            }
        </>
    )
}

export { PageRoutes } 