import Image from "next/image";
import React from "react";
import data from "./greatplacetowork.json";
interface GreatPlaceToWork {
  image: string;
}
function getgreatplacetoworkimage() {
  return data;
}

export default function GreatPlaceToWork() {
  const WorkData = getgreatplacetoworkimage();
  // console.log(WorkData)
  return (
    <div className="relative md:top-[-70px] top-[150px]">
      {WorkData.map((data: GreatPlaceToWork, index: number) => (
        <Image
          key={index}
          src={data.image}
          alt="great place to work"
          priority={true}
          className="w-full 2xl:container"
          width={1390}
          height={608}
        />
      ))}
    </div>
  );
}
