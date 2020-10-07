import React, { useContext } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { AuthContext, AUTH_ACTIONS } from '../../context'

const Home = () => {

    const { dispatch } = useContext(AuthContext)

    const handleLogOut = () => {
        dispatch({ type: AUTH_ACTIONS.LOGOUT })
    }

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Button title="Log Out" onPress={() => handleLogOut()}/>
        </SafeAreaView>
    )
}

export { Home }