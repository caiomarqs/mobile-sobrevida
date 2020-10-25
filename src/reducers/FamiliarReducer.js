import { FAMILIAR_ACTIONS } from './actions'

const familiarReducer = (state, action) => {
    switch (action.type) {
        case FAMILIAR_ACTIONS.ADD_FAMILIAR: {
            return { familiares: [...state.familiares, action.payload] }
        }
        case FAMILIAR_ACTIONS.GET_ALL_FAMILIAR: {
            return { familiares: action.payload };
        }
        case FAMILIAR_ACTIONS.CLEAR_DATA: {
            return { familiares: [] };
        }
        case FAMILIAR_ACTIONS.DELETE_FAMILIAR: {
            const refreshFamiliares = state
                                    .familiares
                                    .filter(familiar => (
                                        familiar.cod !== action.payload
                                    ))

            return { familiares: refreshFamiliares }
        }
        default:
            return state
    }
}

export { familiarReducer }