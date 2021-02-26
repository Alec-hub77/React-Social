import React from "react";
import Dialogs from "./Dialogs";
import {newMessageActionCreator, updateNewMessageCreator,} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispachToProps = (dispatch) => {
  return {
    addMessage: ()=>{
      dispatch(newMessageActionCreator())
    },
    onMessageChange: (text) =>{
      dispatch(updateNewMessageCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)

export default DialogsContainer;



