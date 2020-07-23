const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Timur'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Pasha'}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you doing'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
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

export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText})

export default dialogsReducer;