import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addNewPost(values.newPostText)
    }

    const PostForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Write your post text'} component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    }

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const PostReduxForm = reduxForm({form: 'ProfileAddNewPost'})(PostForm)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <PostReduxForm onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}



export default MyPosts;