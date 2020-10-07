import { GLOBAL_STYLES_ACTIONS } from '../context/actions'

const globalStylesReducer = (state, action) => {
    switch (action.type) {
        case GLOBAL_STYLES_ACTIONS.CHANGE_NAVIGATION: {
            return { ...state, navigation: { ...action.payload } }
        }
        default:
            return state;
    }
}

export { globalStylesReducer }