import Button from "./Button";
import classes from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="Firstname" name="Firstname">
          Firstname
        </label>
        <input id="Firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname" name="lastname">
          lastname
        </label>
        <input id="lastname" type="text" />
      </div>
      <div>
        <label htmlFor="email" name="Email">
          Email
        </label>
        <input id="Email" type="Email" />
      </div>
      <div>
        <label htmlFor="Country" name="Country">
          Country
        </label>
        <input id="Country" type="input" />
      </div>
      <div className={classes.formField}>
        <label className={classes.textarea__label} htmlFor="Story" name="story">
          Your Story
        </label>
        <textarea id="Story" name="story" rows="4" cols="50" />
      </div>
      <Button className={classes.btn} text="SEND" />
    </form>
  );
};

export default ContactForm;
