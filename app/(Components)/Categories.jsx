"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePathname } from "next/navigation";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const PascalCase = (string) => {
  const string01 = string[0].toUpperCase()
  const string02 = string.slice(1, string.length)

  return string01.concat(string02)
}

function Categories({ categoryList }) {
  const router = useRouter()
  const pathname = usePathname();
  const [isActive, setActive] = useState((pathname == '/')? "All" : PascalCase(pathname.slice(10, pathname.length)));
  

  const handleClickCategory = (category) => {
    setActive(PascalCase(category.fields.productCategory))
    router.push(`/category/${category.fields.productCategory}`)
  }

  const handleAllClick = () => {
    setActive("All")
    router.push('/')
  }

  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      className=' flex mx-4 justify-between h-16'
    >
      <button
        className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
          isActive == "All" ? " bg-black text-white" : ""
        }`}
        onClick={handleAllClick}
      >
        All
      </button>
      {categoryList.map((category, index) => (
        <button
          key={index}
          className={` text-xs py-2  rounded-xl border text-gray-500 w-20 ${
            isActive == PascalCase(category.fields.productCategory) ? " bg-black text-white" : ""
          }`}
          onClick={() => handleClickCategory(category)}
        >
          {PascalCase(category.fields.productCategory)}
        </button>
      ))}
    </Carousel>
  );
}

export default Categories;
