const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
           let messageText = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 4, message: messageText});
            return state;
        case  UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer;