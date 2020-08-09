import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'bird-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const LogIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe);
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            }
}
export const LogOut = () => async (dispatch) => {
    let response = await authAPI.logOut();
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false));
            }
}


export default authReducer;