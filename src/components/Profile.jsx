import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className={s.content_img} src='https://www.ferienwohnung-zehentner.at/site/assets/files/1022/steinberge.1200x200.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div className={s.item}>
          Post 1
        </div>
        <div className={s.item}>
          Post 2
        </div>
      </div>

    </div>
  </div>

}

export default Profile;