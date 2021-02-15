import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
 
  let dialogsElement = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElement = props.state.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let messageArea = React.createRef();
  let addMessage = () =>{
    props.dispatch({type: 'ADD-NEW-MESSAGE'});
    
    
  }

  let onMessageChange = ()=>{
    let text = messageArea.current.value;
    props.dispatch({type: 'APDATE-NEW-MESSAGE', newTextMessage:text});
    
  }

  

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <textarea className={s.textArea} ref={messageArea} onChange={onMessageChange} value={props.state.newMessageText}/>
      <button className={s.btn} onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Dialogs;
