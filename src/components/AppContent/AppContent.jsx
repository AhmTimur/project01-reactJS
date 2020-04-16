import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import {Route} from "react-router-dom";

const AppContent = (props) => {
    return <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagePage}  dispatch={props.dispatch} />}/>
        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}  dispatch={props.dispatch} />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
    </div>
};

export default AppContent;