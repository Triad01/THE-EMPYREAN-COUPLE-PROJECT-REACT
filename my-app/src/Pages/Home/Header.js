import classes from "./Header.module.css";
import Hero from "../../Assets/hero.svg";
import Button from "../../Components/UI/Button";
import { ReactComponent as Arrow } from "../../Assets/Arrow1.svg";
import Modal from "../../Components/UI/Modal";
import { Fragment, useRef } from "react";

const Header = () => {
  const dialogRef = useRef();

  const modalHandler = () => {
    dialogRef.current.show();
  };
  return (
    <Fragment>
      <Modal ref={dialogRef}>
        <h1 className="text-white text-center text-3xl p-6">Quick Contact</h1>
        <div className="mb-3">
          <textarea className="w-full"></textarea>
        </div>
        <div className="md:flex justify-between items-center">
          <div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Name"
                className="rounded-md p-2 w-[12rem] md:w-[20rem] focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Email"
                className="rounded-md p-2 w-[12rem] md:w-[20rem] focus:outline-none"
              />
            </div>
          </div>
          <form method="dialog" className="ml-12 mt-8">
            <Button text="SEND" className={classes.modal__btn} />
          </form>
        </div>
      </Modal>
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
              Love is the universal language that binds us all. We celebrate
              love in all its forms. We offer advice, support and inspiration to
              foster healthy relationships and a compassionate world
            </p>
            <div className={classes.box}>
              <Button
                className={classes.btn}
                text="Contact us"
                onClick={modalHandler}
              />
              <div className={classes.textBox}>
                <p className={classes.paraText}>Place order</p>
                <div>
                  <Arrow className={classes.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
