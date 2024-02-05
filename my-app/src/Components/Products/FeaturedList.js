import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product6 from "../../Assets/hoodie-green.svg";
import featuredproduct from "../../Assets/featured_product.png";
import ProductItem from "./ProductItem";
import classes from "./FeaturedList.module.css";

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
  {
    id: "adaadf45dfa",
    src: product6,
    name: "Rom Hoodie",
    description: "100% woolen rapture on my mind hoodie with cape",
    stars: "3 stars",
    price: "200.00",
  },
  {
    id: "adaadfadfdfa",
    src: product6,
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

function FeaturedList() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 m-auto">
      <Slider {...settings}>
        {DummyFeaturedProducts.map((item) => (
          <ProductItem
            key={item.id}
            items={item}
            className={classes.featured__products}
          />
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedList;
