import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/WithSuspense";
import {compose} from "redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializedApp: () => void
}


const WithSuspenseDialog = withSuspense(DialogsContainer)
const WithSuspenseProfile = withSuspense(ProfileContainer)

class App extends Component<DispatchPropsType & MapStatePropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
    }
    componentDidMount() {
        this.props.initializedApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div>
                <HeaderContainer/>
                <div className='app_wrapper'>
                    <Navbar/>
                    <div className='app_wrapper_content'>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                            <Route path="/dialogs" render={()=> <WithSuspenseDialog/>}/>
                            <Route path="/profile/:userId?" render={()=><WithSuspenseProfile/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="*" render={()=><div>404 PAGE IS NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);

const AppContainerWrap: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default AppContainerWrap;