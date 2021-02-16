import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import ContentImg from "../ProfileInfo/content_img.jpg";
import Avatar from "../ProfileInfo/avatar.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={ContentImg} className={s.content_img} />
      </div>
      <div className={s.info}>
        <div className={s.profileDescription}>
          <img src={Avatar} className={s.avatar_img} />
        </div>
        <div className={s.info_description}>
          <h1>Chegevara</h1>
          <h2>55 years old</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
