import {getAuthUserData} from "./auth-reducer";
import {InferActionsType} from "./redux-store";

let initialState: InitialStateType = {
    initialized: false
}

type InitialStateType = {
    initialized: boolean
}
type ActionsTypes = InferActionsType<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "BN/APP/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'BN/APP/INITIALIZED_SUCCESS'} as const)
}


export const initializedApp = () => async (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {dispatch(actions.initializedSuccess());
        });
}


export default appReducer;