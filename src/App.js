import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile/:userId?"
          render={() => (
            <ProfileContainer
            store={props.store}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              store={props.store}
            />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
