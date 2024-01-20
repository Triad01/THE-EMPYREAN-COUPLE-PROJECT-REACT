import { useState } from "react";

import Button from "../../Components/UI/Button";
import classes from "./Signup.module.css";

const Login = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  //validity checks
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  // touched states
  const [nameFieldIsTtouched, setNameFieldIsTouched] = useState(false);
  const [emailFieldIsTouched, setEmailFieldIsTouched] = useState(false);
  const [passwordFieldIsTouched, setPasswordFieldIsTouched] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.length > 5) {
      setEnteredNameIsValid(true);
    }
    if (enteredEmail.includes("@")) {
      setEnteredEmailIsValid(true);
    }
    if (enteredPassword.length > 7) {
      setEnteredPasswordIsValid(true);
    }
    const userDetails = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };
    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
      formIsValid = true;
    }
    if (formIsValid) {
      console.log(userDetails);
      reset();
    }
  };
  const reset = () => {
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = () => {
    setNameFieldIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailFieldIsTouched(true);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const passwordBlurHandler = () => {
    setPasswordFieldIsTouched(true);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1>Sign up</h1>
      <p>Enter your details </p>
      <div>
        <label>Full name</label>
        <input
          type="text"
          placeholder="Brendan Jones"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {!enteredNameIsValid && nameFieldIsTtouched && (
          <p className={classes.error}>Invalid name</p>
        )}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="info@xyz.com"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {!enteredEmailIsValid && emailFieldIsTouched && (
          <p className={classes.error}>Invalid email</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          onBlur={passwordBlurHandler}
        />
        {!enteredPasswordIsValid && passwordFieldIsTouched && (
          <p className={classes.error}>Invalid Password</p>
        )}
      </div>
      <Button text="Sign up" className={classes.btn} />
      <div className={classes.no__acct}>
        <p>
          Already have an account ? <a href="/signup">Log in</a>
        </p>
        <p>Forgot password ?</p>
      </div>
    </form>
  );
};

export default Login;
