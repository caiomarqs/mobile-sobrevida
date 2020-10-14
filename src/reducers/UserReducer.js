import {USER_ACTIONS} from '../context'

const userReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_DATA:{
            return {...state, user: action.payload}
        }
        case USER_ACTIONS.CLEAR_DATA:{
            return{};
        }
        default:
            return state
    }
}

export {userReducer}