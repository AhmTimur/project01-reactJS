import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, sendPhoto, isOwner}) => {
    if(!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            sendPhoto(e.target.files[0])
        }
    }
     return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.avatar}  src={profile.photos.large !=null ? profile.photos.large : "https://vectorified.com/images/no-profile-picture-icon-13.png"}/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;