import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

let rerenderEntireTree = (state) => {
  
  const root = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,

    root
  );
};

rerenderEntireTree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});

// reportWebVitals();
