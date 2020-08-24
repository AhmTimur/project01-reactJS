import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/Types";
const baseProfileReduxDucks = 'bird-network/profile/';

const ADD_POST = baseProfileReduxDucks + 'ADD-POST';
const SET_USER_PROFILE = baseProfileReduxDucks + 'SET-USER-PROFILE';
const SET_STATUS = baseProfileReduxDucks + 'SET-STATUS';
const DELETE_POST = baseProfileReduxDucks + 'DELETE_POST';
const UPDATE_USER_PHOTO = baseProfileReduxDucks + 'UPDATE_USER_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, what is your name?', likesCount: 20},
        {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
            ...state,
                posts: [...state.posts, newPostText],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case UPDATE_USER_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): {type: typeof ADD_POST, newPostText: string} => ({ type: ADD_POST, newPostText})
const setUserProfile = (profile: ProfileType): {type: typeof SET_USER_PROFILE, profile: ProfileType} => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status: string): {type: typeof SET_STATUS, status: string} => ({ type: SET_STATUS, status })
export const deletePost = (postId: number): {type: typeof DELETE_POST, postId: number} => ({ type: DELETE_POST, postId })
const sendPhotoSuccess = (photos: PhotosType): {type: typeof UPDATE_USER_PHOTO, photos: PhotosType} =>({type: UPDATE_USER_PHOTO, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async(dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateProfileStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}
export const sendPhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.sendPhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(sendPhotoSuccess(response.data.data.photos))
    }
}
export const saveProfileData = (profileData: ProfileType) => async (dispatch: any) => {
    const userId = profileData.userId;
    console.log(userId)
    let response = await profileAPI.saveProfileData(profileData);

    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else{
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject( response.data.messages[0])
    }
}


export default profileReducer;