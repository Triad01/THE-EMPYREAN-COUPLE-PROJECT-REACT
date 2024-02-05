import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import product1 from "../../Assets/product1.svg";
import product2 from "../../Assets/cap.svg";
import product3 from "../../Assets/tshirt-black.svg";
import product4 from "../../Assets/hoodie-dark.svg";
import product5 from "../../Assets/hoodie-light.svg";
import product6 from "../../Assets/hoodie-green.svg";

const DummyProducts = [
  {
    id: "adadfa",
    src: product1,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "500.00",
  },
  {
    id: "adadfaadfa",
    src: product2,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "100.00",
  },
  {
    id: "adaadfdfa",
    src: product3,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadf45dfa",
    src: product4,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadfadfdfa",
    src: product5,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadafafafdfa",
    src: product6,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
];
const ProductList = () => {
  return (
    <ul className={classes.list}>
      {DummyProducts.map((item) => {
        return (
          <ProductItem
            key={item.id}
            items={item}
            className={classes.products}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
