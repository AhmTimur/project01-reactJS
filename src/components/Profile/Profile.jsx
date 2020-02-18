import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className={s.content_img} src='https://www.ferienwohnung-zehentner.at/site/assets/files/1022/steinberge.1200x200.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>

}

export default Profile;