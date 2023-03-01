// "use client";
// import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getCategories } from "../../utils/apiRequests";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4
  }
};

export default async function Categories() {
  // const [isActive, setActive] = useState("All");

  // const categories = fetchCategories.items[0].fields.productCategory

  const { items: fetchCategories } = await getCategories();
  console.log(fetchCategories)

  return (
    <>
      <div>
        <h3 className="m-4 text-2xl">Categories</h3>
      </div>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} className=" flex mx-4 justify-between h-16">
        <button>
          All
        </button>
      </Carousel>
    </>
  );
}

// {products && products.map((product, index) => {
//   const productId = product.fields.productImages[0].sys.id;
//   const imageObject = includes.Asset.find((item) => item.sys.id == productId);
//   return (
//     <Product
//       key={index}
//       name={product.fields.productName}
//       price={product.fields.price}
//       url={imageObject.fields.file.url}
//       productId={product.sys.id}
//     />
//   );
// })}