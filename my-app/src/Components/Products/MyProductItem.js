import React from "react";
import Button from "../UI/Button";

const MyProductItem = ({ item }) => {
  return (
    <li className="list-none flex flex-col justify-center items-center">
      <div>
        <img alt="Rom hoodie" src={item.src} />
      </div>
      <div className="text-center">
        <h2 className="">{item.name}</h2>
        <p className="">{item.description}</p>
        <div className="">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="">${item.price}</div>
        <Button className={""} text="ADD TO CART" />
      </div>
    </li>
  );
};

export default MyProductItem;
