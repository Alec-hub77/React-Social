import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ()=>{
    return (
        <div>
           <Post message='Hello how are you?'/>
           <Post message="It's my firs post" />     
        </div>
    )
}

export default MyPosts;