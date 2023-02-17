import React from "react";

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

  return (
    <div>
      <h2>{product.fields.productName}</h2>
      <p>{product.fields.price}</p>
    </div>
  );
}

export default ProductPage;
