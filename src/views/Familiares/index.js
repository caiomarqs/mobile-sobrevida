import React, { useContext, useDebugValue, useEffect } from 'react'

import { CloseIcon, ModalNavigator, ModalStack } from '../../components'
import { FamiliarContex } from '../../context'
import { FAMILIAR_ACTIONS } from '../../reducers'
import { getAllFamiliaresByUser } from '../../services'
import { FamiliaresModal } from '../ModaisView'
import { getData } from '../../utils'

import { Familiares } from './Familiares'

const FamiliaresStackScreen = (props) => {

    const { familiarState, dispatch } = useContext(FamiliarContex)

    useEffect(() => {
        getData('userData').then((cache) => {
            getAllFamiliaresByUser(cache.id, cache.token).then(({ data }) => {
                dispatch({
                    type: FAMILIAR_ACTIONS.GET_ALL_FAMILIAR,
                    payload: data
                })

            })
        })
    }, [])

    return (
        <ModalNavigator>

            {

                familiarState.familiares.length > 0
                    ?
                    <ModalStack.Screen
                        name="Familiares"
                        component={Familiares}
                        options={{
                            headerTransparent: true
                        }}
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
                            options={{
                                headerTransparent: true
                            }}
                        />
                    </>
            }
        </ModalNavigator>
    )
}

export { FamiliaresStackScreen }