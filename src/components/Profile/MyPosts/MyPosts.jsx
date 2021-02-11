import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.postData.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.post_block}>
      <div>
        <textarea
          className={s.post_area}
          placeholder="Type your post"
        ></textarea>
      </div>
      <div className={s.btn_block}>
        <button className={s.btn}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
