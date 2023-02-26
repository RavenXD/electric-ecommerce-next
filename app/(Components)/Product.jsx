import React from "react";
import Image from "next/image";

import Link from "next/link";

function Product({ name, price, url, productId }) {
  return (
    <div className="p-2 bg-[#F8F9F9] flex flex-col items-center ">
      <Link href={`/${productId}`}>
        <Image src={`https:${url}`} alt="product image" width={350} height={300} />
      </Link>
      <div className="pt-2 w-full">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-600">Shoe</p>
        <p className="flex font-bold ">
          <span className="line-through text-gray-600">${price}</span>
          <span className="text-[#F29D38]">&nbsp;$150</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
