import "./globals.css";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";
import Filter from "./Filter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <nav className="nav-bar">
            <ul className="nav-items">
              <li className="nav-item greeting">اسلام علیکم ورحمت الله وبركاته</li>
              <li className="nav-item">
                <a href="./">
                  <Image className="logo" src={logo} alt="logo" width={35} height={35} />
                </a>
              </li>
            </ul>
            <div className="search-bar">
              <input className="search-input" type="text" placeholder="Search" />
              <button className="search-button">
                <Image className="search-icon" src={search} alt="search icon" />
              </button>
            </div>

            <Filter />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
