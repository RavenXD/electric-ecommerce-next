import Product from "../../(Components)/Product";
import Categories from "../../(Components)/Categories";
import Header from "../../(Components)/Header";
import Footer from "../../(Components)/Footer";
import { getProductsBySearch } from "@/utils/apiRequests";
import SearchTopBar from "@/app/(Components)/SearchTopBar";

export default async function SearchPage({ params }) {
  const { items: products, includes } = await getProductsBySearch(params.search);

  return (
    <>
      <Header />
      <SearchTopBar />
      <main className="m-4 mb-20 w-auto ">
        <div
          className={products.length == 0 ? "flex flex-1 justify-center" : "grid gap-2 grid-cols-2"}
        >
          {products.length == 0 ? (
            <div className=""> Products Not found</div>
          ) : (
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
            })
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
