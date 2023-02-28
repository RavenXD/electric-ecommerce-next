"use client";
import Image from "next/image";
import BackButton from "../(Components)/BackButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductSlider = ({ imageList }) => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {imageList.map((url, index) => (
          <Image
            key={index}
            className="w-full p-6"
            src={`https:${url}`}
            width={450}
            height={400}
            alt="product-image"
            priority
          />
        ))}
      </Carousel>
      <BackButton />
    </div>
  );
};

export default ProductSlider;
