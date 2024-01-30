import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import product1 from "../../Assets/product1.svg";
import product2 from "../../Assets/cap.svg";
import product3 from "../../Assets/tshirt-black.svg";
import product4 from "../../Assets/hoodie-dark.svg";
import product5 from "../../Assets/hoodie-light.svg";
import product6 from "../../Assets/hoodie-green.svg";
import product7 from "../../Assets/product1.svg";
import product8 from "../../Assets/cap.svg";
import product9 from "../../Assets/tshirt-black.svg";
import product10 from "../../Assets/hoodie-dark.svg";
import product11 from "../../Assets/hoodie-light.svg";
import product12 from "../../Assets/hoodie-green.svg";

const DummyCustomizedProducts = [
  {
    id: "adadaafafa",
    src: product1,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "500.00",
  },
  {
    id: "adadfaaaadfa",
    src: product2,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "100.00",
  },
  {
    id: "adaadadfafdfa",
    src: product3,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadf4afaf5dfa",
    src: product4,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadafafadfdfa",
    src: product5,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadafafadfaafdfa",
    src: product6,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adadfadadfa",
    src: product7,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "500.00",
  },
  {
    id: "adadfaadsfgga",
    src: product8,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "100.00",
  },
  {
    id: "adaadfdfsggfa",
    src: product9,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadf45dhjhjfa",
    src: product10,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadfadkjkjkfdfa",
    src: product11,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadafafafdlklkfa",
    src: product12,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
];
const CustomizedList = () => {
  return (
    <ul className={classes.list}>
      <ProductItem items={DummyCustomizedProducts} />
    </ul>
  );
};

export default CustomizedList;
