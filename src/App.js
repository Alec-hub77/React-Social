import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile state={props.state.profilePage} addNewPost={props.addNewPost}
          updateNewPostText={props.updateNewPostText} />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} addNewMessage={props.addNewMessage} 
          updateNewMessage={props.updateNewMessage}/>}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
