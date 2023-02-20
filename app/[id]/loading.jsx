import Image from "next/image";
import React from "react";
import loadingimg from "../../assets/img/loading.svg";

function loading() {
  return (
    <div className="loading">
      <Image src={loadingimg} width={50} height={50} />
    </div>
  );
}

export default loading;
