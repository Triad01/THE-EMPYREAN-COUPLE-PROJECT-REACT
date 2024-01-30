import Button from "../../Components/UI/Button";
import classes from "./Header.module.css";
import { ReactComponent as Arrow } from "../../Assets/Arrow1.svg";
import Hero from "../../Assets/product-hero.png";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerText}>Premium Products</h1>
      <div className={classes.header__container}>
        <div className={classes.header__image}>
          <img className={classes.hero} src={Hero} alt="header" />
        </div>
        <div className={classes.header__main}>
          <h1 className={classes.headerText2}>
            Welcome to the Empyrean store. <br /> Shop from our vast collections
            of premium wears.
          </h1>
          <p>
            Celebrate love in all its forms with beautiful customized clothing's
            both for individuals and couples. With over <strong>2000</strong>{" "}
            purchases on our <strong>Online store</strong>, we offer options to
            customize your choice inscriptions, words or images.
          </p>
          <div className={classes.box}>
            <Button className={classes.btn} text="BULK ORDER" />
            <div className={classes.textBox}>
              <p className={classes.paraText}>CONTACT US</p>
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
