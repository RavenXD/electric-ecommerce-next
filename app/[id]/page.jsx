// import React from "react";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../assets/whatsapp.png";
import star from "../../assets/star.svg";
import BackArrow from "@/assets/heroicons/backArrow";
import { getProduct, getAsset } from "../../utils/apiRequests";

async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  const asset = await getAsset(product.fields.productImages[0].sys.id);

  return (
    <>
      <section className=" mt-24 mb-16 m-auto p-4 flex flex-col md:flex-row md:gap-6">
        <div className=" bg-[#F8F9F9] p-6 relative rounded-lg flex-1">
          <Image
            className="w-full p-6"
            src={`https:${asset.fields.file.url}`}
            width={450}
            height={400}
            alt="product-image"
            priority
          />
          <button className="absolute top-3 left-3 ">
            <BackArrow />
          </button>
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

          <h2 className="text-xl pt-4 pb-2 font-bold">Details</h2>

          <p className="text-gray-500 text">
            Nike Dri-Fit is a polyester fabric designed to help you keep dry so you can more
            comfortably work harder, longer. Nike Dri-Fit is a polyester fabric designed to help you
            keep dry so you can more comfortably work harder, longer. Nike Dri-Fit is a polyester
            fabric designed to help you keep dry so you can more comfortably work harder, longer.
          </p>

          <div className="flex justify-center mt-8">
            <Link
              className="flex bg-green-400 py-2 px-4 rounded-xl justify-center items-center"
              href={`https://wa.me/${process.env.CONTACT_NUM}?text=I would like to inquire about ${product.fields.productName}`}
            >
              <Image className="w-10 h-auto" src={whatsapp} alt="whatsaap icon" />
              <span className="text-white px-3 text-2xl">Ask on WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
