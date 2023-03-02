"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchTopBar() {
  const router = useRouter();
  return (
    <div className=" p-4 mt-20 flex justify-between items-center bg-gray-100">
      <button className="font-bold text-sm" onClick={router.back}>{`<Back`}</button>
      <h3 className="font-bold ">Search</h3>
      <Link className="font-bold text-sm" href="/">
        Home
      </Link>
    </div>
  );
}
