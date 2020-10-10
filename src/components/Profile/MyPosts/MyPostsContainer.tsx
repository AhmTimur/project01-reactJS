import React from 'react';
import {DispatchPropsType, MapPropsType, MyPostsMemorized} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addNewPost: actions.addNewPost})(MyPostsMemorized);

export default MyPostsContainer;