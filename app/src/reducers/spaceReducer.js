import { DISPLAY_DATA_START, DISPLAY_DATA_SUCCESS, DISPLAY_DATA_FAIL } from '../actions/spaceActions'

const initialState = {
    data: [],
    error: '',
    isFetching: false,
}

function reducer(state = initialState, action) {
    console.log('reducer', action)
    switch (action.type) {
        case DISPLAY_DATA_START:
            return { 
                ...state,
                isFetching: true,
                error: ''
            };
        case DISPLAY_DATA_SUCCESS:
            return { 
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            };
        case DISPLAY_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;