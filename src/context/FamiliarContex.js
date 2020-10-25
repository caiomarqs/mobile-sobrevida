import React, { createContext, useReducer } from 'react'

import { familiarReducer } from '../reducers'

const FamiliarContex = createContext()

const intialState = {
    familiares: []
}

const FamiliarProvider = (props) => {

    const [familiarState, dispatch] = useReducer(familiarReducer, intialState)

    return (
        <FamiliarContex.Provider value={{ familiarState, dispatch }}>
            {props.children}
        </FamiliarContex.Provider >
    )
}

export { FamiliarContex, FamiliarProvider }