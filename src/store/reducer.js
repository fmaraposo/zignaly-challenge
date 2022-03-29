import Actions from "./action"

const defaultState = {
    city: null
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case Actions.Types.GET_CITY: {

            let newState = { ...state }

            const { query, features } = action.payload

            if (query?.length === 0) {
                newState.city = null
            }
            else if (features?.length === 0) { 
                //Query Not Found
                newState.city.errorMessage = 'Query Not Found'
            }
            else newState.city = action.payload

            return newState

        }

        default:
            return state
    }
}

export default reducer