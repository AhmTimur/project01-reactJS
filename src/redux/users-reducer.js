const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: '', followed: true, fullName: 'Timur', status: 'Do pogramming', location: {country: 'Russia', city: 'Magnitogorsk'}},
        {id: 1, photoUrl: '', followed: false, fullName: 'Sasha', status: 'Do musician shiet', location: {country: 'Russia', city: 'St. Petersburg'}},
        {id: 1, photoUrl: '', followed: false, fullName: 'Pasha', status: 'WORK HARD', location: {country: 'Russia', city: 'St. Petersburg'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users : [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId});
export const setUserAC = (users) =>({type: SET_USERS, users});

export default usersReducer;