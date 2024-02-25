import axios from 'axios';
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from "./userTypes"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(fetchUsersFailure(errMsg));
            })
    }
}
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

