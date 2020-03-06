import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hello, what is your name?', likesCount: 20},
    {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
]
let dialogs = [
    {id: 1, name:'Timur'},
    {id: 2, name:'Sasha'},
    {id: 3, name:'Pasha'}
]
let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'Yo'},
    {id:3, message:'How are you doing'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
