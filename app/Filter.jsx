"use client";
import React, { useState } from "react";

function Filter() {
  const [isActive, setActive] = useState("All");

  return (
    <div className="filter-slider">
      <button
        onClick={() => setActive("All")}
        className={isActive == "All" ? "category active" : "category"}
      >
        All
      </button>
      <button
        onClick={() => setActive("Scissors")}
        className={isActive == "Scissors" ? "category active" : "category"}
      >
        Scissors
      </button>
      <button
        onClick={() => setActive("Pearls")}
        className={isActive == "Pearls" ? "category active" : "category"}
      >
        Pearls
      </button>
      <button
        onClick={() => setActive("Frill")}
        className={isActive == "Frill" ? "category active" : "category"}
      >
        Frill
      </button>
    </div>
  );
}

export default Filter;
