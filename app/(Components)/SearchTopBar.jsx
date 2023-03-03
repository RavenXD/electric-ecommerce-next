"use client";
import Image from "next/image";
import backArrow from "../../assets/back-arrow.png"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchTopBar() {
  const router = useRouter();
  return (
    <div className=" p-4 mt-20 flex justify-between items-center bg-gray-100">
      <button className="font-bold text-sm" onClick={router.back}>
        <Image className="rounded-lg drop-shadow-md " width={30} height={30} src={backArrow} alt="back arrow" />
      </button>
      <h3 className="font-bold ">Search</h3>
      <Link className="font-bold text-sm" href="/">
        Home
      </Link>
    </div>
  );
}
