import React from "react";
import "../../styles/ourvalues.css";
import AccordionItem from "./Accordian";
import AccordianSlider from "./MobileSlider";
import "../../styles/ourvalues.css";
import data from "./ourvalues.json";
interface OurValues {
  image: string;
  title: string;
  description: string;
}
function getOurValues() {
  return data;
}
export default function OurValues() {
  const Ourvaluesdata = getOurValues();
  // console.log("data:",Ourvaluesdata)
  return (
    <div>
      <div className="2xl:container relative md:top-0 top-[200px] pb-10 desktop-view">
        <h1 className="lg:text-xl font-semibold  relative md:left-[70px] left-[10px] md:text-base text-base ">
          Our values
        </h1>
        <div className="flex flex-col space-y-3 pl-20 mt-10">
          {Ourvaluesdata.map((data, index) => (
            <div key={index}>
              <AccordionItem
                title={data.title}
                content={data.content}
                image={data.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="Mobile-slider">
        <AccordianSlider />
      </div>
    </div>
  );
}
