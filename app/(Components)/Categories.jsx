"use client";
import React, { useState } from "react";

function Categories() {
  const [isActive, setActive] = useState("All");

  return (
    <>
      <div style={{ marginTop:'-25px'}}>
        <h3 className="m-4 text-2xl">Categories</h3>
      </div>
      <div className=" flex mx-4 justify-between ">
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
        </button>
      </div>
    </>
  );
}

export default Categories;
