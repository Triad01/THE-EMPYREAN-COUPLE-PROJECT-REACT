import { Fragment } from "react";
import Layout from "./Components/Layout/Layout";
import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <h1 className={classes.heading}>Admin Dashborad</h1>
      <Layout />
    </Fragment>
  );
}

export default App;
