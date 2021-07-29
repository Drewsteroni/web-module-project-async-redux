import axios from 'axios';

export const DISPLAY_DATA_START = "DISPLAY_DATA_START";
export const DISPLAY_DATA_SUCCESS = "DISPLAY_DATA_SUCCESS";
export const DISPLAY_DATA_FAIL = "DISPLAY_DATA_FAIL";

export const displayData = () => dispatch => {
    dispatch({ type: DISPLAY_DATA_START });
    axios
        .get('https://api.spacexdata.com/v4/launches/latest')
        .then(res => 
            dispatch({ type: DISPLAY_DATA_SUCCESS, payload: res.data.results })
        )
        .catch(err => dispatch({ type: DISPLAY_DATA_FAIL, payload: err}));
}
