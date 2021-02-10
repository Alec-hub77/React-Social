import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) =>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        <DialogItem name="Dimych" id="1" />
        <div className={s.dialog}>
          <DialogItem name="Andrey" id="2" />
        </div>
        <div className={s.dialog}>
          <DialogItem name="Sveta" id="3" />
        </div>
        <div className={s.dialog}>
          <DialogItem name="Sasha" id="4" />
        </div>
        <div className={s.dialog}>
          <DialogItem name="Victor" id="5" />
        </div>
        <div className={s.dialog}>
          <DialogItem name="Sergey" id="6" />
        </div>
      </div>
      <div className={s.messages}>
        <Message message='Hello' />
        <Message message='How are you?' />
        <Message message='Coronavirus' />
      </div>
    </div>
  );
};

export default Dialogs;
