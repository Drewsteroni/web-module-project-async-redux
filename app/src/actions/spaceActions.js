import axios from 'axios';
import { spaceAPI } from '../components/SpaceAPI'

export const DISPLAY_DATA = "DISPLAY_DATA"

export const displayData = () => dispatch => {
    dispatch({ type: DISPLAY_DATA });
    axios
        .get(spaceAPI)
        .then(res => 
            dispatch({ type: DISPLAY_DATA, payload: res.data })
        )
        .catch("data not found")
}