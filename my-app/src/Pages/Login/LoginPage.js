import Button from "../../Components/UI/Button";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <form className={classes.form}>
      <h1>Login</h1>
      <p>Enter your email and password to login into your mail dashboard</p>
      <div>
        <label>Username</label>
        <input type="email" placeholder="info@xyz.com" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <Button text="login" className={classes.btn} />
      <div className={classes.no__acct}>
        <p>
          Don't have an account ? <a href="/signup">Log in</a>
        </p>
        <p>
          <a href="/adaf">Forgot password ?</a>
        </p>
      </div>
    </form>
  );
};

export default Login;
