import React, { useContext } from 'react'

import { AuthContext, UserProvider } from '../context'
import {
    Configuracoes,
    ChangePass,
    DepoimentoStackScreen,
    DeleteAccount,
    FamiliaresStackScreen,
    Home,
} from '../views'
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
                        <Stack.Screen name="Familiares" component={FamiliaresStackScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="Depoimento" component={DepoimentoStackScreen} options={{ headerShown: false }} />
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