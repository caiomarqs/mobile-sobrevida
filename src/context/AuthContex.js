import React, { createContext, useEffect, useReducer } from 'react'

import { authReducer } from '../reducers'

const AuthContext = createContext()

const intialState = {
    isAuth: false,
    name: '',
    email: ''
}

const AuthProvider = (props) => {

    const [authState, dispatch] = useReducer(authReducer, intialState)


    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export { AuthContext, AuthProvider }