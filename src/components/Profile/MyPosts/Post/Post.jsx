import React from 'react';
import s from './Post.module.css';
import userAvatar from './user_avatar.png';


const Post = (props)=>{
    return (
        <div className={s.item}>
            <img src={userAvatar}/>
            {props.message}
            <div>
            {props.likesCount}
            </div>
        </div>
    )
}

export default Post;