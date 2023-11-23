import classes from "./NewsLetterForm.module.css";

const NewsLetterForm = () => {
  return (
    <form className={classes.form}>
      <input type="email" />
      <button>We Love To Hear From You</button>
    </form>
  );
};

export default NewsLetterForm;
