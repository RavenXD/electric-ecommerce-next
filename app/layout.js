import "./globals.css";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header id="header">
          <nav id="nav-bar">
            <ul id="nav-items">
              <li className="nav-item" id="greeting">
                اسلام علیکم ورحمت الله وبركاته
              </li>
              <li className="nav-item">
                <a href="./">
                  <Image
                    id="logo"
                    src={logo}
                    alt="logo"
                    width={35}
                    height={35}
                  />
                </a>
              </li>
            </ul>
            <div id="search-bar">
              <input id="search-input" type="text" placeholder="Search" />
              <button id="search-button">
                <Image id="search-icon" src={search} alt="search icon" />
              </button>
            </div>
            <div id="filter-slider">
              <button className="category">All</button>
              <button className="category">Scissors</button>
              <button className="category">Pearls</button>
              <button className="category">Frill</button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
