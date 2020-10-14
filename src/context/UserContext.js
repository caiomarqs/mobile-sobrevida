import React, {createContext, useReducer} from 'react'

import {userReducer} from '../reducers'

const UserContext = createContext()

const UserProvider = (props) => {

    const [userState, dispatch] = useReducer(userReducer, {})

    return(
        <UserContext.Provider value={{userState, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}