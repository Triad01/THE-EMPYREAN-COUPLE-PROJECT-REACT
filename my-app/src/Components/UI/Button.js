import classes from "./Button.module.css";

const Button = (props) => {
  const btn_style = `${props.className} + ${classes.button}`;
  return <button className={btn_style}>{props.text}</button>;
};

export default Button;
