import { NavLink } from "react-router-dom";
import Brand from "../../Assets/Brand/logo-white.svg";
import classes from "./Footer.module.css";
import { ReactComponent as Envelope } from "../../Assets/envelope.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img className={classes.img} src={Brand} alt="footer logo" />
      <div>
        <p>
          Love is the universal language that binds us all.
          <br /> We celebrate love in all its forms. We offer advice, support{" "}
          <br />
          and inspiration to foster healthy relationships and a compassionate
          world.
        </p>
      </div>
      <nav className={classes.footer__nav}>
        <ul className={classes.footer__list}>
          <div>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>Testimonials</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink>Shop</NavLink>
            </li>
            <li>
              <NavLink>Premium services</NavLink>
            </li>
            <li>
              <NavLink>NewsLetter</NavLink>
            </li>
          </div>
          <div>
            <Envelope className={classes.envelope} />
            <li>&copy;Emperyn2023</li>
          </div>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
