import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

function Header() {
  return (
    <header className="relative z-10 ">
      <nav className="p-4 max-w-7xl m-auto flex items-center justify-around fixed top-0 rounded-b-2xl bg-gray-100 w-full">
        <Link href="./">
          <Image src={logo} width={35} height={35} alt="logo" />
        </Link>
          <input className="h-10 w-60 p-2 mx-2 rounded-lg" type="text" placeholder="Search" />
          <button className="bg-black rounded-lg py-1 px-2">
            <Image className="" src={search} width={30} height={30} alt="search-icon" />
          </button>
      </nav>
    </header>
  );
}

export default Header;
