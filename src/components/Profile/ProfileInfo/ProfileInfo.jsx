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
                    <img className={s.avatar}  src={profile.photos.large !=null ? profile.photos.large : "https://vectorified.com/images/no-profile-picture-icon-13.png"}/>
                </div>
                Name
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;