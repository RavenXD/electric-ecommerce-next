import Image from "next/image";
import React from "react";
import featured from "../../assets/Featured Product.png";

function Featured() {
  return (
    <div className="mt-24 mx-4 flex justify-center ">
      <Image className="w-auto h-auto rounded-lg drop-shadow-md " src={featured} alt="featured" />
    </div>
  );
}

export default Featured;
