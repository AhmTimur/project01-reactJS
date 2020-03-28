import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import {Route} from "react-router-dom";
import PersonalDialog from "./Dialogs/PersonalDialog/PersonalDialog";

const AppContent = (props) => {
    return <div className='app-wrapper-content'>
        <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagePage.dialogs}/>}/>
        <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
        <Route path={`/dialog/${props.state.messagePage.messages[0].id}`}  render={() => <PersonalDialog dialogs={props.state.messagePage.messages}/>}/>
        <Route path={`/dialog/${props.state.messagePage.messages[1].id}`}  render={() => <PersonalDialog dialogs={props.state.messagePage.messages}/>}/>
        <Route path={`/dialog/${props.state.messagePage.messages[2].id}`}  render={() => <PersonalDialog dialogs={props.state.messagePage.messages}/>}/>
    </div>
};

export default AppContent;