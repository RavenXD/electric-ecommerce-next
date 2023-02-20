// import React from "react";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../assets/img/whatsapp.png";
import star from "../../assets/img/star.svg";

async function getProduct(id) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${id}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return data;
}

async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  // console.log(product.fields.url);

  return (
    <>
      <div className="product-main">
        <div className="image-card">
          <Image
            className="product-image"
            src={product.fields.url}
            alt=""
            width={80}
            height={120}
          />
        </div>
        <div className="name-n-price">
          <div className="name-price">
            <h2 className="product-name">{product.fields.productName}</h2>
            <p className="product-price">${product.fields.price}</p>
          </div>
          <div className="rating">
            <p className="rating-text">Rating&nbsp;(5.0)</p>
            <Image className="rating-stars" src={star} alt="rating" width={150} />
          </div>
        </div>
        <div className="details-container">
          <h2 className="detail-heading">Details</h2>
          <p className="details">
            Nike Dri-Fit is a polyester fabric designed to help you keep dry so you can more
            comfortably work harder, longer. Nike Dri-Fit is a polyester fabric designed to help you
            keep dry so you can more comfortably work harder, longer. Nike Dri-Fit is a polyester
            fabric designed to help you keep dry so you can more comfortably work harder, longer.
          </p>
        </div>
        <Link
          href={`https:/wa.me/923330508717?text=I would like to inquire about ${product.fields.productName}`}
          className="contact-whatsapp-btn"
        >
          <Image className="whatsapp-icon" src={whatsapp} alt="whatsaap icon" />
          <span className="whatsapp-message">Ask on WhatsApp</span>
        </Link>
      </div>
    </>
  );
}

export default ProductPage;
