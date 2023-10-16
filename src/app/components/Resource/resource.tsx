import React from "react";
import Image from "next/image";
export default function Resource() {
  return (
    <div className="2xl:container md:top-[-90px] bg-lightblue  relative top-[200px]">
      <div className=" md:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-2  gap-8 relative ">
        <Image
          src="/Resource.png"
          alt="Resouce ERG Image"
          className="   relative lg:left-[20px] md:mx-auto "
          width={612}
          height={350}
          priority={true}
        />
        <div className="flex flex-col p-8 md:mx-auto ">
        <h1 className="lg:text-xl font-semibold text-base">Our Employee Resource Groups (ERGs)</h1>
        <p className="lg:text-sm leading-[28px]   py-6 text-xsm ">
          We have been working towards building a strong and diverse community and
          empowering our employees to be their authentic selves. One of the
          efforts is our Employee Resource Groups (ERG), a voluntary,
          employee-led group with a shared purpose and commitment towards a
          strand of diversity.
        </p>
        <button className="text-left text-blue">Learn more</button>
        </div>
       
      </div>
    </div>
  );
}
