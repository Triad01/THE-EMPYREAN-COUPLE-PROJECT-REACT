import { useState } from "react";
import Button from "./Button";
import classes from "./SearchBar.module.css";

const SearchBar = ({ onSelectedStatus }) => {
  const [selected_status, set_selected_status] = useState("choose");

  const onChangeHandler = (event) => {
    const newStatus = event.target.value;
    set_selected_status(newStatus);
    onSelectedStatus(newStatus);
  };
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
          value={selected_status}
        >
          <option value="choose">Choose</option>
          <option value="Delivered">Delivered</option>
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
