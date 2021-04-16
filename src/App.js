import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount(){   
       
    this.props.initializeApp() 
}

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile/:userId?"
          render={() => (
            <ProfileContainer
            store={this.props.store}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              store={this.props.store}
            />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={()=> <Login/>} />
      </div>
    </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( 
withRouter,
connect(mapStateToProps, {initializeApp}))(App);
