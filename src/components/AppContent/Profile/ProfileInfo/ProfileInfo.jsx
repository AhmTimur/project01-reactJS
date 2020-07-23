import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
     return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.avatar}  src={props.profile.photos.large !=null ? props.profile.photos.large : 'http://localhost:3000/static/media/userPhoto.3d1c93dd.png'}/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;