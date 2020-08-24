import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'bird-network/initial/INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
}


export default appReducer;