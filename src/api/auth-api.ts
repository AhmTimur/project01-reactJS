import {APIResponseType, instance, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";

type MeResponseDataType = {
        id: number
        email: string
        login: string
}
type LoginResponseDataType = {
    id: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<APIResponseType>(`auth/login`).then(res => res.data)
    }
}