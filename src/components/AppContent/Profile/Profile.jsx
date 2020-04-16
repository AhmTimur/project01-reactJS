import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage} dispatch={props.dispatch} />
    </div>

}

export default Profile;