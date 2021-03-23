import React from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name="login" component={Input} validate={[required]}/>
      </div>
      <div>
      <Field placeholder={"Password"} name="password" component={Input} validate={[required]}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} id={'remember'} type={"checkbox"} /> <label for={"remember"}>remember me</label> 
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {

    }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm  onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
