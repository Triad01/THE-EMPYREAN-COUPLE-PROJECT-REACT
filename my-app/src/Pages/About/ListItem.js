import classes from "./ListItem.module.css";
const ListItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.img} alt="services" />
      <h3 className={classes.h_text}>{props.h_text}</h3>
      <p className={classes.p_text}>{props.p_text}</p>
      <button>Learn more</button>
    </li>
  );
};

export default ListItem;
