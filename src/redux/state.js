let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, what is your name?', likesCount: 20},
            {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
        ],
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
        ]
    }
}

export default state;
