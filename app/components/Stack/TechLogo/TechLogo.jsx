import Image from "next/image";
import React from "react";

function TechLogo({ imagesrc }) {
  return (
    <div className="relative w-[80px] h-[80px] m-20">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2 glow animate-pulse "></div>
      <Image
        alt="stack logo"
        src={"/assets/stack/" + imagesrc}
        width={100}
        height={100}
        className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"
      />
    </div>
  );
}

export default TechLogo;
