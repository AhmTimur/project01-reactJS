import React, {Component} from 'react'
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {UsersContainer} from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import {connect, Provider} from 'react-redux'
import {initializedApp} from './redux/app-reducer'
import Preloader from './components/Common/Preloader/Preloader'
import store, {AppStateType} from './redux/redux-store'
import {withSuspense} from './hoc/WithSuspense'
import {compose} from 'redux'
import {Header} from './components/Header/Header'
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import {ProfileOutlined, MessageOutlined, UsergroupAddOutlined, BookOutlined, SlidersOutlined, SettingOutlined} from '@ant-design/icons'


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializedApp: () => void
}

const {Content, Sider} = Layout;

const WithSuspenseDialog = withSuspense(DialogsContainer)
const WithSuspenseProfile = withSuspense(ProfileContainer)

class App extends Component<DispatchPropsType & MapStatePropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
    }

    componentDidMount() {
        this.props.initializedApp()
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
            <Layout>
                <Header/>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu mode="inline" defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']}
                              style={{height: '100%', borderRight: 0}}>
                            <Menu.Item key="1" icon={<ProfileOutlined/>} style={{}}><Link to="/profile">Profile</Link></Menu.Item>
                            <Menu.Item key="2" icon={<MessageOutlined/>}><Link to="/dialogs">Messages</Link></Menu.Item>
                            <Menu.Item key="3" icon={<UsergroupAddOutlined/>}><Link to="/users">Users</Link></Menu.Item>
                            <Menu.Item key="4" icon={<BookOutlined/>}><Link to="/news">News</Link></Menu.Item>
                            <Menu.Item key="5" icon={<SlidersOutlined/>}><Link to="/music">Music</Link></Menu.Item>
                            <Menu.Item key="6" icon={<SettingOutlined/>}><Link
                                to="/settings">Settings</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280}}>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                                <Route path="/dialogs" render={() => <WithSuspenseDialog/>}/>
                                <Route path='/profile/:userId?' render={() => <WithSuspenseProfile/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="*" render={() => <div>404 PAGE IS NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App)

const AppContainerWrap: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default AppContainerWrap