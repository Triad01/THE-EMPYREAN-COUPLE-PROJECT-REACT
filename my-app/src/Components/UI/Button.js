import classes from "./Button.module.css";

const Button = ({ className, text, onClick }) => {
  const btn_style = `${className} + ${classes.button}`;
  return (
    <button onClick={onClick} className={btn_style}>
      {text}
    </button>
  );
};

export default Button;
