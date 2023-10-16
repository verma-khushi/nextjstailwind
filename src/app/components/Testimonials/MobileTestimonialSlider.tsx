import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
import data from "./testimonials.json";
import TestimonialCard from "./TestimonialCard";

export default async function TestimonialSlide() {
  return (
    <>
      <div className=" 2xl:container bg-  p-10  relative   top-[195px]  ">
        <SliderProvider>
          <div className="flex justify-between  relative md:bottom-11 bottom-4">
            <h1 className=" mx-auto font-semibold text-center  text-base">
              Hear from our team
            </h1>
          </div>
          <div className="blaze-track-container relative top-[20px]">
            <div className="blaze-track">
              <div className=" ">
                <div className="bg-white rounded-lg py-16 px-10">
                  {data &&
                    data.map((testimonial, index) => (
                      <TestimonialCard testimonial={testimonial} key={index} />
                    ))}
                </div>
              </div>
              <div className=" ">
                <div className="bg-white rounded-lg py-16 px-10">
                  {data &&
                    data.map((testimonial, index) => (
                      <TestimonialCard testimonial={testimonial} key={index} />
                    ))}
                </div>
              </div>
              <div className=" ">
                <div className="bg-white rounded-lg py-16 px-10">
                  {data &&
                    data.map((testimonial, index) => (
                      <TestimonialCard testimonial={testimonial} key={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="controls relative  md:right-12 right-3">
            <button className="blaze-prev" aria-label="Move To previous slide">
              <ArrowLeft />
            </button>

            <button className="blaze-next " aria-label="Move To next slide">
              <ArrowRight />
            </button>
          </div>
        </SliderProvider>
      </div>
    </>
  );
}
