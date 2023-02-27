"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2
  // },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

function Categories() {
  const [isActive, setActive] = useState("All");

  return (
    <>
      <div>
        <h3 className="m-4 text-2xl">Categories</h3>
      </div>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} className=" flex mx-4 justify-between">
        <button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "All" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("All")}
        >
          All
        </button>
        <button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "Scissors" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Scissors")}
        >
          Scissors
        </button>
        <button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "Pearls" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Pearls")}
        >
          Pearls
        </button>
        <button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "Frill" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Frill")}
        >
          Frill
        </button><button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "Scissors" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Scissors")}
        >
          Scissors
        </button>
        <button
          className={` text-xs py-2 px-5 rounded-xl border text-gray-500 ${
            isActive == "Pearls" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Pearls")}
        >
          Pearls
        </button>
      </Carousel>
    </>
  );
}

export default Categories;
