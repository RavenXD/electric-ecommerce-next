import Product from "./(Components)/Product";
import Categories from "./(Components)/Categories";
import Featured from "./(Components)/Featured";

import { getProducts } from "../utils/apiRequests";

export default async function Home() {
  const { items: products, includes } = await getProducts();

  return (
    <>
      <Featured />
      <Categories />
      <main className="m-4 mb-16 w-auto ">
        <div className=" grid gap-2 grid-cols-2">
          {products.map((product, index) => {
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
    </>
  );
}
