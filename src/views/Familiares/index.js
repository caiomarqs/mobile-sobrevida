import React, { useEffect, useContext } from 'react'
import { SafeAreaView, Text } from 'react-native'

import { ModalNavigator, ModalStack, CloseIcon } from '../../components'
import { UserContext } from '../../context'
import { Colors } from '../../styles'
import { FamiliaresModal } from '../ModaisView'

const FamiliaresStackScreen = (props) => {

    const { userState } = useContext(UserContext)

    return (
        <ModalNavigator>

            {

                userState.user.familiares.length > 0
                    ?
                    <ModalStack.Screen
                        name="Familiares"
                        component={Familiares}
                    />
                    :
                    <>
                        <ModalStack.Screen
                            name="Modal"
                            component={FamiliaresModal}
                            options={{
                                title: "",
                                headerBackImage: () => <CloseIcon />,
                                headerTransparent: true

                            }}
                        />
                        <ModalStack.Screen
                            name="Familiares"
                            component={Familiares}
                        />
                    </>
            }
        </ModalNavigator>
    )
}

const Familiares = (props) => {

    return (
        <SafeAreaView>
            <Text>Familiares</Text>
        </SafeAreaView>
    )
}

export { FamiliaresStackScreen }