"use client"
import Image from "next/image";
import BackButton from "../(Components)/BackButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductSlider = () => {
  return (
    <Carousel>
      <Image
        className="w-full p-6"
        src="https://via.placeholder.com/150"
        width={450}
        height={400}
        alt="product-image"
        priority
      />
      <Image
        className="w-full p-6"
        src="https://via.placeholder.com/150"
        width={450}
        height={400}
        alt="product-image"
        priority
      />
      <Image
        className="w-full p-6"
        src="https://via.placeholder.com/150"
        width={450}
        height={400}
        alt="product-image"
        priority
      />
      {/* <BackButton /> */}
    </Carousel>
  )
}

export default ProductSlider