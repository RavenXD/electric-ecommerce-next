"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import chat from "../../assets/heroicons/chat.svg";

function Footer() {
  const pathname = usePathname();

  return (
    <footer className=" relative ">
      <div className="fixed max-w-7xl m-auto bottom-0 w-full flex py-3 px-10 justify-between items-center rounded-t-2xl border bg-white z-20">
        <Link href="/" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 ${pathname == "/" ? "text-[#F29D38]" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>

          <p className={`text-xs ${pathname == "/" ? "text-[#F29D38]" : ""}`}>Home</p>
        </Link>

        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUM}`}
          className="flex flex-col items-center"
        >
          <Image src={chat} width={20} height={20} alt="contact" />
          <p className="text-xs">Chat</p>
        </Link>

        <Link href="/contact" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 ${pathname == "/contact" ? "text-[#F29D38]" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>

          <p className={`text-xs ${pathname == "/contact" ? "text-[#F29D38]" : ""}`}>Address</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
