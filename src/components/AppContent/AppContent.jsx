import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";


const AppContent = (props) => {
    return <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
        <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store} />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
        <Route path="/users" render={() => <UsersContainer />}/>
        <Route path="/login" render={() => <Login />}/>
    </div>
};

export default AppContent;