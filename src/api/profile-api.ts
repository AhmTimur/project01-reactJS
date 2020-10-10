import {ProfileType} from "../types/Types";
import {instance, APIResponseType} from "./api";

type SendPhotoDataType = {
    photos: {
        small: string
        large: string
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data)
    },
    sendPhoto(file: File) {
        const formData = new FormData();
        formData.append("Image", file)
        return instance.put<APIResponseType<SendPhotoDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfileData(profileData: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profileData).then(res => res.data)
    }
}