import React from "react";
import Image from "next/image";
import data from "./resource.json";

interface Resource {
  title: string;
  description: string;
}

function getResourcedata() {
  return data;
}

export default function Resource() {
  const resourcedata = getResourcedata();

  return (
    <div className="2xl:container md:top-[-90px] bg-lightblue  relative top-[200px]">
      <div className=" md:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-2  gap-8 relative ">
        <Image
          src="/Resource.png"
          alt="Resource ERG Image"
          className="relative lg:left-[20px] md:mx-auto"
          width={612}
          height={350}
          priority={true}
        />
        <div className="flex flex-col p-8 md:mx-auto">
          {resourcedata.map((resource: Resource, index: number) => (
            <div key={index}>
              <h1 className="lg:text-xl font-semibold text-base">
                {resource.title}
              </h1>
              <p className="lg:text-sm leading-[28px] py-6 text-xsm">
                {resource.description}
              </p>
            </div>
          ))}
          <button className="text-left text-blue">Learn more</button>
        </div>
      </div>
    </div>
  );
}
