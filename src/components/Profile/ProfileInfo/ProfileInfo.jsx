import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
import ContentImg from '../ProfileInfo/content_img.jpg';
import Avatar from '../ProfileInfo/avatar.jpg';


const ProfileInfo = ()=> {
    return (
        <div>
            <div>
                <img src={ContentImg} className={s.content_img} />
            </div>
            <div>
                <div>
                    <img src={Avatar} className={s.avatar_img} />
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;
