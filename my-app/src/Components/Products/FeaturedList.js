import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import featuredproduct from "../../Assets/featured_product.png";

const DummyFeaturedProducts = [
  {
    id: "adadfa",
    src: featuredproduct,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "500.00",
  },
  {
    id: "adadfaadfa",
    src: featuredproduct,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "100.00",
  },
  {
    id: "adaadfdfa",
    src: featuredproduct,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
];
const FeaturedList = () => {
  return (
    <ul className={`${classes.list}`}>
      <ProductItem
        className={classes.featured__item}
        items={DummyFeaturedProducts}
      />
    </ul>
  );
};

export default FeaturedList;
