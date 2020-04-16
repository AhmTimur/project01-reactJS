import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, what is your name?', likesCount: 20},
                {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
            ],
            newPostText: ''
        },
        messagePage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;