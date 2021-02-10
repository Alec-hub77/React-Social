import React from 'react';
import ContentImg from '../Profile/content-img.jpg'
import Avatar from '../Profile/avatar.jpg'
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = ()=>{
    return (
        <div>
        <div>
          <img src={ContentImg} className={s.content_img}/>
        </div>
        <div>
          <div>
            <img src={Avatar} className={s.avatar_img}/>
          </div>
        </div>
        < MyPosts />
      </div>
    )
}

export default Profile;