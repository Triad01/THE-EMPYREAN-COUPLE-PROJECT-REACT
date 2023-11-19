import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo1 from "../../Assets/logo1.png";
import cart from "../../Assets/cart.png";
const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <img className={classes.logo} src={logo1} alt="logo"></img>
      </div>
      <ul className={classes.nav_list}>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About us</Link>
        </li>
        <li>
          <Link>Premium services</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <img src={cart} alt="cart icon" />
      </ul>
    </nav>
  );
};

export default MainNavigation;
