import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom";
import AppContent from "./components/AppContent/AppContent";
import {addMessage} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <AppContent state={props.state}  addMessage={props.addMessage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} updateNewMessageText={props.updateNewMessageText}/>
            </div>
        </BrowserRouter>);
}

export default App;