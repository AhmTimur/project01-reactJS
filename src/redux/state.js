let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, what is your name?', likesCount: 20},
            {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
        ],
        newPostText : 'Write your text'
    },
    messagePage: {
        dialogs: [
            {id: 1, name:'Timur'},
            {id: 2, name:'Sasha'},
            {id: 3, name:'Pasha'}
        ],
        messages: [
            {id:1, message:'hi'},
            {id:2, message:'Yo'},
            {id:3, message:'How are you doing'},
        ],
        newMessageText: 'Write your message'
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagePage.newMessageText
    }
    state.messagePage.messages.push(newMessage);
    state.messagePage.newMessageText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const updateNewMessageText = (newMessageText) => {
    state.messagePage.newMessageText = newMessageText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;