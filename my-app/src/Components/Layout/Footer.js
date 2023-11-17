import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.text}>Showing orders 1 to 10 of 112</div>
      <div className={classes.circle}>
        <div>{"<<"}</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>{">>"}</div>
      </div>
    </footer>
  );
};

export default Footer;
