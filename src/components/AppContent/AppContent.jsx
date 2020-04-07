import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import {Route} from "react-router-dom";

const AppContent = (props) => {
    return <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagePage}  addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
    </div>
};

export default AppContent;