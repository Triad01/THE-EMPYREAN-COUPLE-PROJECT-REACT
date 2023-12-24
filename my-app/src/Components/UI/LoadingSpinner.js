import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
