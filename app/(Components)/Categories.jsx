"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

function Categories() {
  const [isActive, setActive] = useState("All");

  return (
    <>
      <div>
        <h3 className="m-4 text-2xl">Categories</h3>
      </div>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} className=" flex mx-4 justify-between h-16">
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "All" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("All")}
        >
          All
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Scissors" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Scissors")}
        >
          Scissors
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Pearls" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Pearls")}
        >
          Pearls
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Frill" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Frill")}
        >
          Frill
        </button><button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Scissors" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Scissors")}
        >
          Scissors
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Pearls" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Pearls")}
        >
          Pearls
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Pearls" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Pearls")}
        >
          Pearls
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Frill" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Frill")}
        >
          Frill
        </button><button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
            isActive == "Scissors" ? " bg-black text-white" : ""
          }`}
          onClick={() => setActive("Scissors")}
        >
          Scissors
        </button>
        <button
          className={` text-xs py-2  rounded-xl border text-gray-500 w-16 ${
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