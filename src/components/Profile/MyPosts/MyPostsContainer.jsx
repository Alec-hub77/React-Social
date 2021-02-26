import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispachToProps = (dispatch) => {
  return {
  addPost: () => {
    dispatch(addPostActionCreator())
  },
  onPostChange: (text) => {
    dispatch(updateNewPostTextActionCreator(text))
  }
 }
}

const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;
