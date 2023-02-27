'use client';
import Image from "next/image";
import React from "react";
import featured from "../../assets/Featured Product.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Featured() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="mt-24 mx-4 flex justify-center ">
        <Image className="w-auto h-auto rounded-lg drop-shadow-md " src={featured} alt="featured" />
      </div>
      <div className="mt-24 mx-4 flex justify-center ">
        <Image className="w-auto h-auto rounded-lg drop-shadow-md " src={featured} alt="featured" />
      </div>
      <div className="mt-24 mx-4 flex justify-center ">
        <Image className="w-auto h-auto rounded-lg drop-shadow-md " src={featured} alt="featured" />
      </div>
    </Carousel>
  );
}

export default Featured;
