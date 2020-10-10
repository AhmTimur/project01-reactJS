import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/Types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsType} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: 'Hello, what is your name?', likesCount: 20},
        {id: 2, message: 'Hi, my name is Bob', likesCount: 15}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "BN/PROFILE/ADD-POST":
            let newPostText = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
            ...state,
                posts: [...state.posts, newPostText]
            };
        case "BN/PROFILE/SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "BN/PROFILE/SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "BN/PROFILE/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case "BN/PROFILE/UPDATE-USER-PHOTO":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}

export const actions = {
    addNewPost: (newPostText: string) => ({ type: 'BN/PROFILE/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'BN/PROFILE/SET-USER-PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'BN/PROFILE/SET-STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'BN/PROFILE/DELETE_POST', postId } as const),
    sendPhotoSuccess: (photos: PhotosType) =>({type: 'BN/PROFILE/UPDATE-USER-PHOTO', photos} as const)
}



export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
        dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async(dispatch) => {
    let data = await profileAPI.getStatus(userId);
            dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateProfileStatus(status);
        if(data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status));
        }
}
export const sendPhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.sendPhoto(file);
    if(data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.sendPhotoSuccess(data.data.photos))
    }
}
export const saveProfileData = (profileData: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfileData(profileData);

    if(data.resultCode === ResultCodesEnum.Success) {
        if(userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    }else{
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
    return Promise.reject(data.messages[0])
    }
}


export default profileReducer;


type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>