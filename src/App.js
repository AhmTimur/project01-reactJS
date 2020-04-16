import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom";
import AppContent from "./components/AppContent/AppContent";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <AppContent state={props.state} dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>);
}

export default App;