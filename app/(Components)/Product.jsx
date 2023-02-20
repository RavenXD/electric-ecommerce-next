import React from "react";
import Image from "next/image";

import Link from "next/link";

function Product({ name, price, url, productId }) {
  return (
    <div className="product">
      <Link href={`/${productId}`}>
        <div className="product-card">
          <Image
            src={`https:${url}`}
            width={80}
            height={90}
            className="product-image"
            alt="product"
          />
        </div>
      </Link>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}

export default Product;
