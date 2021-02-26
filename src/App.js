import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
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
