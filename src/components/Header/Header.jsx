import React from 'react';
import s from './Header.module.css';
console.log(s);

const Header = () => {
  return <header className={s.header}>
    <img src='https://lofrev.net/wp-content/photos/2017/03/bower_logo_1.png' />
  </header>
}

export default Header;