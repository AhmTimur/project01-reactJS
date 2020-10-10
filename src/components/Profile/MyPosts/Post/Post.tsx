import React from 'react';
import s from './Post.module.css';

const Post = (props: {message: string, likesCount: number}) => {
  return <div className={s.item}>
    <img src='https://www.w3schools.com/howto/img_avatar.png' />
    {props.message}
        <div>
      <span>Likes {props.likesCount}</span>
    </div>
  </div>


}

export default Post;