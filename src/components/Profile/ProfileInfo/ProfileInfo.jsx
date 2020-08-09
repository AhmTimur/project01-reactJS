import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }
     return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.avatar}  src={profile.photos.large !=null ? profile.photos.large : 'http://localhost:3000/static/media/userPhoto.3d1c93dd.png'}/>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;