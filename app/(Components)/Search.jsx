import React from "react";
import Image from "next/image";
import search from "../../assets/img/search.png";

function Search() {
  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search" />
      <button className="search-button">
        <Image className="search-icon" src={search} alt="search icon" />
      </button>
    </div>
  );
}

export default Search;
