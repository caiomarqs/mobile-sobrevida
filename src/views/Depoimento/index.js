import React, { useContext, useDebugValue, useEffect } from 'react'

import { ModalNavigator, ModalStack, CloseIcon } from '../../components'
import { UserContext } from '../../context'

import { DepoimentoModal } from '../ModaisView'

import { Depoimento } from './Depoimento'

const DepoimentoStackScreen = (props) => {

    const { userState } = useContext(UserContext)
    

    return (
        <ModalNavigator>
            {
                userState.user.depoimento
                    ?
                    <ModalStack.Screen
                        name="Depoimento"
                        component={Depoimento}
                        options={{
                            headerTransparent: true
                        }}
                    />
                    :
                    <>
                        <ModalStack.Screen
                            name="Modal"
                            component={DepoimentoModal}
                            options={{
                                title: "",
                                headerBackImage: () => <CloseIcon />,
                                headerTransparent: true
                            }}
                        />
                        <ModalStack.Screen
                            name="Depoimento"
                            component={Depoimento}
                        />
                    </>
            }
        </ModalNavigator>
    )
}

export { DepoimentoStackScreen }