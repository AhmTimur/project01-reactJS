import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom";
import AppContent from "./components/AppContent/AppContent";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <AppContent store={props.store}/>
            </div>
        </BrowserRouter>);
}

export default App;