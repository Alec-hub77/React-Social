import React from "react";
import Dialogs from "./Dialogs";
import {newMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    
  }
}

let mapDispachToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody)=>{
      dispatch(newMessageActionCreator(newMessageBody))
    },
    
  }
}


export default compose(connect(mapStateToProps, mapDispachToProps), withAuthRedirect)(Dialogs);



