import { AUTH_ACTIONS } from '../context/actions'


const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN: {
            return { ...state, isAuth: true };
        }
        case AUTH_ACTIONS.LOGOUT: {
            return { ...state, isAuth: false };
        }
        case AUTH_ACTIONS.ISLOGGED: {
            return state;
        }
        default:
            return state;
    }
}

export { authReducer }