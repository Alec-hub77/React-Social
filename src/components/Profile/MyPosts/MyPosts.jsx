import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let posts = props.postData.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () =>{
     props.addNewPost();
  } 
    
  

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  
  return (
    <div className={s.post_block}>
      <div>
        <textarea
          className={s.post_area}
          placeholder="Type your post"
        ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
      </div>
      <div className={s.btn_block}>
        <button className={s.btn} onClick={addPost}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
