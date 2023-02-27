// import React from "react";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../assets/whatsapp.png";
import star from "../../assets/star.svg";
import { getProduct, getAsset } from "../../utils/apiRequests";
import BackButton from "../(Components)/BackButton";
import ProductSlider from "../(Components)/ProductSlider";

async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  const asset = await getAsset(product.fields.productImages[0].sys.id);

  return (
    <>
      <section className=" mt-2 mb-16 m-auto p-4 flex flex-col md:flex-row md:gap-6">
        <div className=" bg-[#F8F9F9] p-6 relative rounded-lg flex-1">
          {/* Add Image Slider Here */}
          <ProductSlider />
        </div>

        <div className="flex-1">
          <div className="py-2 flex justify-between items-center font-bold">
            <h2 className="text-2xl">{product.fields.productName}</h2>
            <p className="text-2xl text-[#F29D38] ">${product.fields.price}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xl text-[#F29D38]">Rating&nbsp;(5.0)</p>
            <Image className="px-1 " src={star} alt="rating" width={150} height={150} />
          </div>

          <h2 className="text-xl pt-4 pb-2 font-bold">Category</h2>

          <p className="text-gray-500 text">Fans</p>

          <h2 className="text-xl pt-4 pb-2 font-bold">Details</h2>

          <p className="text-gray-500 text leading-7">
            Nike Dri-Fit is a polyester fabric designed to help you keep dry so you can more
            comfortably work harder, longer. Nike Dri-Fit is a polyester fabric designed to help you
            keep dry so you can more comfortably work harder, longer. Nike Dri-Fit is a polyester
            fabric designed to help you keep dry so you can more comfortably work harder, longer.
          </p>

          <div className="flex justify-center mt-4">
            <Link
              className="flex bg-green-400 py-2 px-4 rounded-3xl justify-center items-center"
              href={`https://wa.me/+923330508717?text=I would like to inquire about: %20%0A \*${product.fields.productName}\* %20%0A \_${product.fields.price}\_ %20%0A https:${asset.fields.file.url}`}
            >
              <Image className="w-8 h-auto" src={whatsapp} alt="whatsaap icon" />
              <span className="text-white px-3 text-xl">Ask on WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
