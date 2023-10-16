import "../../style.css";
import "../../styles/testimonials.css";
import React from "react";
import TestimonialSlider from "./MobileTestimonialSlider";
import Image from "next/image";
import data from "./testimonials.json";
import TestimonialCard from "./TestimonialCard";
export default async function Testimonials() {
  return (
    <>
      <div className="2xl:container bg-lightblue py-16 px-24 desktop-view">
        <div className="relative bottom-8">
          <h1 className="lg:text-xl font-semibold text-center  text-base">
            Hear from our team
          </h1>
          <div className="lg:grid lg:gap-12 lg:grid-cols-3 lg:space-y-0 md:grid-cols-1 md:space-y-28 md:p-30  py-6">
            <div className="bg-white p-10  rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <TestimonialCard testimonial={testimonial} key={index} />
                ))}
            </div>
            <div className="bg-white p-10  rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <TestimonialCard testimonial={testimonial} key={index} />
                ))}
            </div>
            <div className="bg-white p-10  rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <TestimonialCard testimonial={testimonial} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Mobile-slider">
        <TestimonialSlider />
      </div>
    </>
  );
}
