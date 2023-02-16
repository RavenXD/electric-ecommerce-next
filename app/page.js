import Image from "next/image";
import home from "../assets/img/home.png";
import product from "../assets/img/product.png";

function Product({ name, price, url }) {
  return (
    <div className="product">
      <div className="product-card">
        <Image
          src={`https:${url}`}
          width={100}
          height={100}
          className="product-image"
          alt="product"
        />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}

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
    <main id="main">
      <div id="products-grid">
        {products.map((product, index) => {
          const productId = product.fields.productImages[0].sys.id;

          const imageObject = includes.Asset.find(
            (item) => item.sys.id == productId
          );

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
      <footer id="footer-menu">
        <ul id="footer-items">
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
