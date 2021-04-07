import React from "react";
import {Redirect} from "react-router-dom"
import { Field, reduxForm } from 'redux-form';
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from 'react-redux';
import {login} from "../../redux/auth-reducer";
import style from "./Login.module.css";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name="email" component={Input} validate={[required]}/>
      </div>
      <div>
      <Field placeholder={"Password"} name="password" component={Input} type={"password"} validate={[required]}/>
      </div>
      <div>
        <Field className={style.box} component={"input"} name={"rememberMe"} id={'remember'} type={"checkbox"} /> <label for={"remember"}>remember me</label> 
      </div>
      <div>
        <button className={style.btn}>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
      return <Redirect to={'/profile'} />
    }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm  onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
