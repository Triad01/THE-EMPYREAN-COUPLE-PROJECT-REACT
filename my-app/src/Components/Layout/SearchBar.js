import { useState, useEffect } from "react";
import Button from "../UI/Button";
import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  const [selected_value, set_selected_value] = useState("choose");
  const onChangeHandler = (event) => {
    set_selected_value(event.target.value);
  };
  useEffect(() => {
    props.onSelectedStatus(selected_value);
  }, [selected_value, props]);
  return (
    <div className={classes.search}>
      <input type="search" placeholder="search" />
      <div className={classes.selectBox}>
        <label htmlFor="myselect" className={classes.label}>
          Status
        </label>
        <select
          id="myselect"
          onChange={onChangeHandler}
          className={classes.select}
          value={selected_value}
        >
          <option value={selected_value}>{selected_value}</option>
          <option value="Delivering">Delivering</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <Button text="Export" />
    </div>
  );
};

export default SearchBar;
