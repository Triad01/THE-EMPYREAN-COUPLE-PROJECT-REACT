import classes from "./Header.module.css";
import Hero from "../../Assets/hero.svg";
import Button from "../../Components/UI/Button";
import { ReactComponent as Arrow } from "../../Assets/Arrow1.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerText}>The Emperyn Couple</h1>
      <div className={classes.header__container}>
        <div className={classes.header__image}>
          <img className={classes.hero} src={Hero} alt="header" />
        </div>
        <div className={classes.header__main}>
          <h1 className={classes.headerText2}>
            An Expression Of Shared Lifestyle, Beliefs, Love & Faith.
          </h1>
          <p>
            Love is the universal language that binds us all. We celebrate love
            in all its forms. We offer advice, support and inspiration to foster
            healthy relationships and a compassionate world
          </p>
          <div className={classes.box}>
            <Button className={classes.btn} text="watch" />
            <div className={classes.textBox}>
              <p className={classes.paraText}>book a consultation</p>
              <div>
                <Arrow className={classes.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
