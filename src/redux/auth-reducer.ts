import {ResultCodesEnum, ResultCodeForCaptchaEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsType} from "./redux-store";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null as string | null
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "BN/auth/SET_USER_DATA":
        case "BN/auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (id: number| null, email: string| null, login: string| null, isAuth: boolean) => ({type: 'BN/auth/SET_USER_DATA', payload: {id, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captcha: string) => ({type: 'BN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captcha}} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const LogIn = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.logIn(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else{
        if(data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }

    }

export const LogOut = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logOut();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(actions.getCaptchaUrlSuccess(data.url))
}


export default authReducer;

type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
