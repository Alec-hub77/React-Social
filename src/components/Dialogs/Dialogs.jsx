import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import {Textarea} from "../common/FormControl/FormControl";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const Dialogs = (props) => {
  

  let dialogsElement = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messageElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

   let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }  
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit}>
          <Field component={Textarea} validate={[required, maxLength100]} className={s.textArea} name={"newMessageBody"} placeholder={"Enter your message"} />
          <button className={s.btn}>Add message</button>
        </form>
  )
}
  
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
  

export default Dialogs; 
   
 



