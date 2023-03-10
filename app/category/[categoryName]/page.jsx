import React from "react";
import Product from "../../(Components)/Product";
import Categories from "../../(Components)/Categories";
import Header from "../../(Components)/Header";
import Footer from "../../(Components)/Footer";

import { getCategories, getProductsByCategory } from "@/utils/apiRequests";

export default async function CategoryPage({ params }) {
  const { items: products, includes } = await getProductsByCategory(params.categoryName);
  const categories = await getCategories();
  const categoryList = categories.items

  return (
    <>
      <Header />
      <div className="mt-20">
        <Categories categoryList={categoryList}/>
      </div>
      <main className="m-4 mb-20 w-auto ">
        <div className=" grid gap-2 grid-cols-2">
          {products &&
            products.map((product, index) => {
              const productId = product.fields.productImages[0].sys.id;
              const imageObject = includes.Asset.find((item) => item.sys.id == productId);
              return (
                <Product
                  key={index}
                  name={product.fields.productName}
                  price={product.fields.price}
                  url={imageObject.fields.file.url}
                  productId={product.sys.id}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}
