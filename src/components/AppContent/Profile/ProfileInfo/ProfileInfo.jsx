import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
     return (
        <div>
            <div>
                <img className={s.content_img}
                     src='https://www.ferienwohnung-zehentner.at/site/assets/files/1022/steinberge.1200x200.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;