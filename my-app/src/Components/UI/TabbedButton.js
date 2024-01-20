import classes from "./TabbedButton.module.css";
const TabbedButton = ({ children, onSelect, isSelected }) => {
  return (
    <button
      onClick={onSelect}
      className={
        isSelected ? `${classes.btn} ${classes.selected}` : classes.btn
      }
    >
      {children}
    </button>
  );
};

export default TabbedButton;
