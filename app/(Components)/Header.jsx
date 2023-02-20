import Image from "next/image";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
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
      </nav>
    </header>
  );
}

export default Header;
