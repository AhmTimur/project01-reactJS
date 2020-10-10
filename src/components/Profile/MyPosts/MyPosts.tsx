import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../types/Types";
import {AddNewPostReduxForm, PostFormDataType} from "./AddNewPostForm/AddNewPostForm";

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postElement = [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values: PostFormDataType) => {
        props.addNewPost(values.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
};

export const MyPostsMemorized = React.memo(MyPosts)

export type MapPropsType = {
    posts: Array<PostsType>
}
export type DispatchPropsType = {
    addNewPost: (newPostText: string)=> void
}