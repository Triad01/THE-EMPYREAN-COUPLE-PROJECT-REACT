import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const styles = `${classes.item} ${props.className}`;
  return props.items.map((item) => {
    return (
      <li key={item.id} className={styles}>
        <div>
          <img alt="Rom hoodie" src={item.src} />
        </div>
        <div className={classes.details}>
          <h2 className={classes.name}>{item.name}</h2>
          <p className={classes.description}>{item.description}</p>
          <div className={classes.rating}>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className={classes.price}>${item.price}</div>
          <Button className={classes.btn} text="ADD TO CART" />
        </div>
      </li>
    );
  });
};

export default ProductItem;
