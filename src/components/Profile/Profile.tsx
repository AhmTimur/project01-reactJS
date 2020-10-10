import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/Types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: () => void
    sendPhoto: () => void
    saveProfileData: (profileData: ProfileType) => Promise<void>
}

const Profile: FC<PropsType> = (props) => {
    return <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} sendPhoto={props.sendPhoto} saveProfileData={props.saveProfileData}/>
        <MyPostsContainer/>
    </div>

}

export default Profile;