import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

let postData = [
  { id: 1, message: "Hello how are you?", likesCount: 3 },
  { id: 2, message: "It's my firs post", likesCount: 7 },
];

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Sergey" },
];

let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Coronavirus" },
  { id: 4, message: "Lets go chil" },
  { id: 5, message: "Sure" },
  { id: 6, message: "Be in five minutes" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  root
);

reportWebVitals();
