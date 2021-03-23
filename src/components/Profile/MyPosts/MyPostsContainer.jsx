import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispachToProps = (dispatch) => {
  return {
  addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText))
  },
  
 }
}

const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;
