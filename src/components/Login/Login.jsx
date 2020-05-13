import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./Login.module.css";
import { requiredField, maxLength20 } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../.././redux/auth-reducer";
import { Redirect } from "react-router-dom";
import Img from "../../assets/images/user.png";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.field1}>
        <i className="fas fa-envelope"></i>
        <Field
          name={"email"}
          placeholder={"Email"}
          component={Input}
          validate={[requiredField, maxLength20]}
          style={{
            borderRadius: "10px",
            fontSize: "120%",
            padding: "5px",
          }}
        />
      </div>
      <div className={classes.field2}>
        <i className="fas fa-lock"></i>

        <Field
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          component={Input}
          validate={[requiredField]}
          style={{ borderRadius: "10px", fontSize: "120%", padding: "5px" }}
        />
      </div>
      <div className={classes.field3}>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />
        <p>Remember me</p>
      </div>

      <button
        style={{
          width: "200px",
          fontSize: "130%",
          borderRadius: "10px",
          marginTop: "-20px",
          marginBottom: "20px",
          backgroundColor: "#4a76a8",
          color: "#fff"
        }}
      >
        Login
      </button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={classes.login}>
      <div className={classes.signIn}>
        <h1>Sign in</h1>
      </div>
      <div className={classes.img}>
        <img src={Img} alt="description" />
      </div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
