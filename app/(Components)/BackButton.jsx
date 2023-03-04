"use client";
import Image from "next/image";
import backArrow from "../../assets/back-arrow.png"
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={router.back} className="absolute top-3 left-3 ">
      <Image className="rounded-lg drop-shadow-md " width={30} height={30} src={backArrow} alt="back arrow" />
    </button>
  );
}

export default BackButton;
