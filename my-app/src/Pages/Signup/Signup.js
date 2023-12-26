import Button from "../../Components/UI/Button";
import classes from "./Signup.module.css";

const Login = () => {
  return (
    <form className={classes.form}>
      <h1>Sign up</h1>
      <p>Enter your details </p>
      <div>
        <label>Full name</label>
        <input type="text" placeholder="Brendan Jones" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="info@xyz.com" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
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
