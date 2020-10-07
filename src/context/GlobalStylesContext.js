import React, { createContext, useReducer } from 'react'

import { globalStylesReducer } from '../reducers'
import { Colors } from '../styles'

const GlobalStylesContext = createContext()

const intialStyles = {
    navigator: {
        backgroundColor: Colors.branco000,
        contentColor: Colors.preto000
    }
}

const GlobalStylesProvider = (props) => {

    const [globalStylesState, dispatch] = useReducer(globalStylesReducer, intialStyles)

    return (
        <GlobalStylesContext.Provider value={{ globalStylesState, dispatch }}>
            {props.children}
        </GlobalStylesContext.Provider>
    )
}

export { GlobalStylesContext, GlobalStylesProvider }