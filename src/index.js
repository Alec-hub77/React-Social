import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { addNewMessage, addNewPost, updateNewPostText, updateNewMessage} from "./redux/state";
import state, {subscribe} from './redux/state'



let rerenderEntireTree = (state)=>{
   
    const root = document.getElementById("root");
    ReactDOM.render(
    
      <React.StrictMode>
        <BrowserRouter>
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}
         updateNewPostText={updateNewPostText} updateNewMessage={updateNewMessage}/>
        </BrowserRouter>
      </React.StrictMode>,
      
      root
    );
  }

rerenderEntireTree(state);
subscribe(rerenderEntireTree)

// reportWebVitals();
