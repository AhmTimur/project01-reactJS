import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://lofrev.net/wp-content/photos/2017/03/bower_logo_1.png' />
    <div className={s.loginBlock}>
      {props.isAuth
          ? <div>{props.login} - <button onClick={props.LogOut}>Log out</button> </div>
          : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  </header>
}

export default Header;