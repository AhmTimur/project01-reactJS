import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataReduxForm} from "./ProfileDataForm";
import styles from "../../Common/FormsControl/FormsControl.module.css";

const ProfileInfo = ({profile, status, updateStatus, sendPhoto, isOwner, saveProfileData}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            sendPhoto(e.target.files[0])
        }
    }
    const onSubmit = (profileData) =>{
        saveProfileData(profileData).then(()=>{
            setEditMode(false)
        });
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.avatar}
                         src={profile.photos.large != null ? profile.photos.large : "https://vectorified.com/images/no-profile-picture-icon-13.png"}/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <div><ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/></div>
                    : <div><ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/></div>}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>FullName</b>: {profile.fullName}
        </div>
        <div className={s.status}>
            <b>Status</b>:<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob && <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div>
            <b>Contacts</b>:
            <div className={s.contacts}>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;