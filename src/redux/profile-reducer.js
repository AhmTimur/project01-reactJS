import {profileAPI} from "../api/api";

const ADD_POST = 'bird-network/profile/ADD-POST';
const SET_USER_PROFILE = 'bird-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'bird-network/profile/SET-STATUS';
const DELETE_POST = 'bird-network/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, what is your name?', likesCount: 20},
        {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}


export default profileReducer;