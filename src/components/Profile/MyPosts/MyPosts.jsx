import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../../components/common/FormControl/FormControl";

const maxLength20 = maxLengthCreator(20);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>        
        <Field component={Textarea} name={"newPostText"}
          className={s.post_area}
          placeholder="Type your post" validate={[required, maxLength20]}
        />
      </div>
      <div className={s.btn_block}>
        <button className={s.btn}>Add post</button>
      </div>
      
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPosts = (props) => {

  let posts = props.postData.map((p) => (
    <Post message={p.message} key={p.id} id={p.id} likesCount={p.likesCount} />
  ));
  let onAddPost = (values) =>{
    props.addPost(values.newPostText);  
  }

  return (
    <div className={s.post_block}>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      {posts}
    </div>
  );
};

export default MyPosts;
