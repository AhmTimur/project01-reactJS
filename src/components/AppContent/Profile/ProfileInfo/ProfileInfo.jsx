import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
     return (
        <div>
            <div>
                <img className={s.content_img}
                     src='https://stillmed.olympic.org/media/Images/OlympicOrg/News/2019/12/11/2019-12-11-mountain-day-featured-01.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.avatar}  src={props.profile.photos.large !=null ? props.profile.photos.large : 'http://localhost:3000/static/media/userPhoto.3d1c93dd.png'}/>
                </div>

                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;