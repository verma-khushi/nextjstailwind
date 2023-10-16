import Image from "next/image";
import React from "react";
export default function GreatPlaceToWork() {
  return (
    <div className="relative md:top-[-70px] top-[150px]">
      <Image
        src="/Greatplace.png"
        alt="great place to work"
        priority={true}
        className="w-full 2xl:container"
        width={1390}
        height={608}
      />
    </div>
  );
}
