import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors'
import {UserOutlined} from '@ant-design/icons'
import {LogOut} from '../../redux/auth-reducer'
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'


export const Header: React.FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(LogOut())
    }
    const {Header} = Layout
    return <Header className="header">
        <div className="logo"/>
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key='1' style={{backgroundColor: 'inherit'}}>
                        <Link to='/profile'><img src='https://lofrev.net/wp-content/photos/2017/03/bower_logo_1.png'
                                                 style={{width: '40px'}}/></Link>
                    </Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <><Col span={1}>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}></Avatar>
                </Col>
                    <Col span={1} style={{color: '#fff'}}>
                        {login}
                    </Col>
                    <Col span={3}>
                        <Button onClick={logout}>Log out</Button>
                    </Col></>
                : <Col span={6}>
                    <Button><Link to={'/login'}>Login</Link></Button>
                </Col>}
        </Row>
    </Header>
}