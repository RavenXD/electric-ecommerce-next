import React from "react";
import Image from "next/image";
import product from "../assets/img/product.png";

function Product({ name, price, url }) {
  return (
    <div className="product">
      <div className="product-card">
        <Image
          src={`https:${url}`}
          width={100}
          height={100}
          className="product-image"
          alt="product"
        />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}

export default Product;
