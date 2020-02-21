import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
  return <div>
    My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
    <div className={s.posts}>
      <Post message="Hello, what is your name?" likesCount='20'/>
      <Post message="Hi, my name is Ken" likesCount='15'/>
    </div>
  </div>
}

export default MyPosts;