import { DISPLAY_DATA } from '../actions/spaceActions'

const initialState = {
    data: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_DATA:
            return { 
                ...state,
                data: state.data.map(action),
                error: 'data not found'
            }

        default:
            return state;
    }
}

export default reducer;