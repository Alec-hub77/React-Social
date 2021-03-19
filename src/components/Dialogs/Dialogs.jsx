import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  

  let dialogsElement = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messageElement = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let messageArea = React.createRef();
  let onAddMessage = () =>{
    props.addMessage();
    
  }

  let onMessageChange = ()=>{
    let text = messageArea.current.value;
    props.onMessageChange(text);
   
    
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <textarea className={s.textArea} ref={messageArea} onChange={onMessageChange} value={props.newMessageText}/>
      <button className={s.btn} onClick={onAddMessage}>Add message</button>
    </div>
  );
};
    
  
  

  

export default Dialogs;
