import Image from "next/image";
import home from "../assets/img/home.png";

import Product from "./Product";

async function getProducts() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries/?select=&content_type=electricStoreItems`,
    {
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

export default async function Home() {
  const { items: products, includes } = await getProducts();

  return (
    <main>
      <div className="products-grid">
        {products.map((product, index) => {
          const productId = product.fields.productImages[0].sys.id;

          const imageObject = includes.Asset.find((item) => item.sys.id == productId);

          return (
            <Product
              key={product.fields.productId}
              name={product.fields.productName}
              price={product.fields.price}
              url={imageObject.fields.file.url}
            />
          );
        })}
      </div>
      <footer className="footer-menu">
        <ul className="footer-items">
          <li className="footer-item">
            <Image src={home} className="footer-item-icon" alt="home" />
            <p className="footer-item-name">Home</p>
          </li>
          <li className="footer-item">
            <Image src={home} className="footer-item-icon" alt="home" />
            <p className="footer-item-name">Home</p>
          </li>
          <li className="footer-item">
            <Image src={home} className="footer-item-icon" alt="home" />
            <p className="footer-item-name">Home</p>
          </li>
          <li className="footer-item">
            <Image src={home} className="footer-item-icon" alt="home" />
            <p className="footer-item-name">Home</p>
          </li>
        </ul>
      </footer>
    </main>
  );
}
