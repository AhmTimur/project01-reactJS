import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/object-helper"
import {UserType} from "../types/Types"

const FOLLOW = 'bird-network/users/FOLLOW'
const UNFOLLOW = 'bird-network/users/UNFOLLOW'
const SET_USERS = 'bird-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'bird-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'bird-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'bird-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'bird-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: false})
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.followingProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number): {type: typeof FOLLOW, userId: number} => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number): {type: typeof UNFOLLOW, userId: number} => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UserType>): {type: typeof SET_USERS, users: Array<UserType>} => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): {type: typeof SET_CURRENT_PAGE, currentPage: number} => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount: number): {type: typeof SET_TOTAL_USERS_COUNT, totalCount: number} => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching: boolean): {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean} => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, id: number): {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, id: number} => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
});

export const usersRequest = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollow = async (dispatch: any, userId:number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer;














