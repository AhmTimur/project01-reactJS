import {InferActionsType} from "./redux-store";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Timur'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Pasha'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you doing'},
    ]as Array<MessageType>
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "BN/DIALOGS/ADD-MESSAGE":
            let messageText = action.messageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: messageText}]
            };
        default:
            return state;
    }
}

export const actions = {
    addMessage: (messageText: string) => ({type: 'BN/DIALOGS/ADD-MESSAGE', messageText} as const)
}


export default dialogsReducer;


export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>