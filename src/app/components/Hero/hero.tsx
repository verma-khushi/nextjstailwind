import React from "react";
import Image from "next/image";
import "../../styles/Hero.css";
import data from "./hero.json";
interface Hero {
  image: string;
  title: string;
  description: string;
}
function getHerodata() {
  return data;
}
export default function Hero() {
  const HeroData = getHerodata();
  // console.log("Hero", HeroData);
  return (
    <div className="relative flex flex-wrap items-center justify-between   py-12 ">
      {HeroData.map((data) => (
        <>
          <Image
            src={data.image}
            alt="Career Hero Image"
            className="HeroImage"
            width={1500}
            height={100}
            priority={true}
          />
          <div className=" xl:bottom-[122px] JoinUsSection container bg-white absolute md:bottom-30 md:py-6 md:px-8 px-4 md:border-white rounded-md min-w-[25em] max-w-[27em] md:left-[270px] border-0 left-1/2 transform -translate-x-1/2 md:mt-0 mt-[450px] ">
            <span className="md:text-xl font-semibold leading-[44px] mb-10  text-base text-left">
              {data.title}
            </span>
            <p className="text-xsm font-normal leading-[26px] mt-3 ">
              {data.description}
            </p>
            <div className="flex  ">
              <button className="bg-blue py-2 px-5 mt-4 text-white rounded">
                Join Us
              </button>
              <Image
                src="/Info.png"
                alt="Icon"
                width={"35"}
                height={"1"}
                className="mx-4 mt-4"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
