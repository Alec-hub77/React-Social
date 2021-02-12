import React from "react";

import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} addNewPost={props.addNewPost} 
      updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText}/>
    </div>
  );
};

export default Profile;
