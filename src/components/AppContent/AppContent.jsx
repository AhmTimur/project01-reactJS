import DialogsContainer from "./Dialogs/DialogsContainer";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import {Route} from "react-router-dom";

const AppContent = (props) => {
    return <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
        <Route path="/profile" render={() => <Profile store={props.store} />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
    </div>
};

export default AppContent;