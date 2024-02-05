import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

const ProductItem = ({ className, items }) => {
  const styles = `${classes.item} ${className}`;
  return (
    <li key={items.id} className={styles}>
      <div>
        <img alt="Rom hoodie" src={items.src} />
      </div>
      <div className={classes.details}>
        <h2 className={classes.name}>{items.name}</h2>
        <p className={classes.description}>{items.description}</p>
        <div className={classes.rating}>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className={classes.price}>${items.price}</div>
        <Button className={classes.btn} text="ADD TO CART" />
      </div>
    </li>
  );
};

export default ProductItem;
