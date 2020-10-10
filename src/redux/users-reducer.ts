import {updateObjectInArray} from "../utils/object-helper"
import {UserType} from "../types/Types"
import {BaseThunkType, InferActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users ids
}


const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case 'BN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };

        case 'BN/USERS/SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'BN/USERS/SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'BN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalCount: action.totalCount
            }
        case 'BN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'BN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        default:
            return state;
    }
}



export const actions = {
    followSuccess: (userId: number) => ({type: 'BN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'BN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'BN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'BN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'BN/USERS/SET_TOTAL_USERS_COUNT', totalCount: totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'BN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, id: number) => ({type: 'BN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, id} as const)
}

export const usersRequest = (page: number, pageSize: number): ThunkType => async (dispatch: any) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}

const _followUnfollow = async (dispatch: Dispatch<ActionsType>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
}


export default usersReducer;

type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>














