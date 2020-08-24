const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
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

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = action.messageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: messageText}]
            };
        default:
            return state;
    }
}

type addMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    messageText: string
}

export const addMessageActionCreator = (messageText: string): addMessageActionCreatorType => ({type: ADD_MESSAGE, messageText})

export default dialogsReducer;