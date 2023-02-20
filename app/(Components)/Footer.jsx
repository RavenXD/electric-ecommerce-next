import Image from "next/image";
import Link from "next/link";
import home from "../../assets/img/home.png";

function Footer() {
  return (
    <footer className="footer-menu">
      <ul className="footer-items">
        <Link href="/">
          <li className="footer-item">
            <Image src={home} className="footer-item-icon" alt="home" />
            <p className="footer-item-name">Home</p>
          </li>
        </Link>
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
  );
}

export default Footer;
