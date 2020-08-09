import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'bird-network/initial/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
}


export default appReducer;