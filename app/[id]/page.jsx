import React from "react";

async function ProductPage({ params }) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const product = await res.json();
  // const product = await getProduct(params.id);

  return (
    <div>
      <h2>{product.fields.productName}</h2>
      <p>{product.fields.price}</p>
    </div>
  );
}

export default ProductPage;
