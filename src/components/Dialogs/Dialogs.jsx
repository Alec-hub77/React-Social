import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {
  
  // let dialogsData = [
  //   { id: 1, name: "Dimych" },
  //   { id: 2, name: "Andrey" },
  //   { id: 3, name: "Sveta" },
  //   { id: 4, name: "Sasha" },
  //   { id: 5, name: "Victor" },
  //   { id: 6, name: "Sergey" },
  // ];

  // let messagesData = [
  //   { id: 1, message: "Hello" },
  //   { id: 2, message: "How are you?" },
  //   { id: 3, message: "Coronavirus" },
  //   { id: 4, message: "Lets go chil" },
  //   { id: 5, message: "Sure" },
  //   { id: 6, message: "Be in five minutes" },
  // ];

  let dialogsElement = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElement = props.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
