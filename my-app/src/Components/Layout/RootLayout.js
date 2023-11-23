import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
