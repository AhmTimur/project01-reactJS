import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
        <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
rerenderEntireTree();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
