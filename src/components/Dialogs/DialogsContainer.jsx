import React from "react";
import Dialogs from "./Dialogs";
import {newMessageActionCreator, updateNewMessageCreator,} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {
  
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(newMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      onUpdateMessage={onMessageChange}
      addMessage={addMessage}
      dialogsPage={state}
      dialogsData={state.dialogsPage.dialogsData}
      messagesData={state.dialogsPage.messagesData}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
