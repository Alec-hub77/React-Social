import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import ContentImg from "../ProfileInfo/content_img.jpg";
import Avatar from "../../../assets/images/userAvatar.jpg";
import Preloader from '../../common/Preloader/Preloader' 


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src={ContentImg} className={s.content_img} />
      </div>
      <div className={s.info}>
        <div className={s.profileDescription}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : Avatar} className={s.avatar_img} />
        </div>
        <div className={s.info_description}>
          <h1>{props.profile.fullName}</h1>
          <h2>{props.profile.aboutMe}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
