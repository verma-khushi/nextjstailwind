import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
export default function Culture() {
  return (
    <div className=" 2xl:container bg-lightorange relative   md:top-[-90px] top-[200px] md:py-20 py-10 px-30 ">
      <SliderProvider>
        <div className="flex justify-between  relative md:bottom-11 bottom-4">
          <h1 className="md:text-xl font-semibold relative md:left-[70px] left-[10px] text-base">
            Our culture
          </h1>
          <div className="controls relative bottom-12 md:right-20 right-3">
            <button className="blaze-prev" aria-label="Move To previous slide">
              <ArrowLeft />
            </button>

            <button className="blaze-next " aria-label="Move To next slide">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="blaze-track-container relative bottom-8 md:right-10">
          <div className="blaze-track">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/sliderimg.png"
                alt="sliderImage"
                className="w-full md:w-[650px] px-4 relative md:right-[20px] mx-auto md:order-2"
                width={300}
                height={700}
              />

              <div className="flex flex-col text-left md:text-left bottom-[18px]  md:relative md:left-[90px]  px-5 md:order-1">
                <span className="text-base relative xl:bottom-[18px] font-semibold xl:mt-2 mt-4">
                  A space for appreciation
                </span>
                <span className="text-xsm text-lightred md:mt-3 mt-6">
                  REWARDS AND RECOGNITION
                </span>
                <span className="md:text-sm md:w-7/12 mt-4 leading-[28px] text-xsm w-full">
                  We believe in recognising and celebrating employees
                  milestones, innovative ideas, and drive to achieve their
                  goals.
                </span>
                <button className="text-left text-sm mt-4 text-blue">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/sliderimg.png"
                alt="sliderImage"
                className="w-full md:w-[650px] px-4 relative md:right-[20px] mx-auto md:order-2"
                width={300}
                height={700}
              />

              <div className="flex flex-col text-left md:text-left bottom-[18px]  md:relative md:left-[90px]  px-5 md:order-1">
                <span className="text-base relative xl:bottom-[18px] font-semibold xl:mt-2 mt-4">
                  A space for appreciation
                </span>
                <span className="text-xsm text-lightred md:mt-3 mt-6">
                  REWARDS AND RECOGNITION
                </span>
                <span className="md:text-sm md:w-7/12 mt-4 leading-[28px] text-xsm w-full">
                  We believe in recognising and celebrating employees
                  milestones, innovative ideas, and drive to achieve their
                  goals.
                </span>
                <button className="text-left text-sm mt-4 text-blue">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/sliderimg.png"
                alt="sliderImage"
                className="w-full md:w-[650px] px-4 relative md:right-[20px] mx-auto md:order-2"
                width={300}
                height={700}
              />

              <div className="flex flex-col text-left md:text-left bottom-[18px]  md:relative md:left-[90px]  px-5 md:order-1">
                <span className="text-base relative xl:bottom-[18px] font-semibold xl:mt-2 mt-4">
                  A space for appreciation
                </span>
                <span className="text-xsm text-lightred md:mt-3 mt-6">
                  REWARDS AND RECOGNITION
                </span>
                <span className="md:text-sm md:w-7/12 mt-4 leading-[28px] text-xsm w-full">
                  We believe in recognising and celebrating employees
                  milestones, innovative ideas, and drive to achieve their
                  goals.
                </span>
                <button className="text-left text-sm mt-4 text-blue">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/sliderimg.png"
                alt="sliderImage"
                className="w-full md:w-[650px] px-4 relative md:right-[20px] mx-auto md:order-2"
                width={300}
                height={700}
              />

              <div className="flex flex-col text-left md:text-left bottom-[18px]  md:relative md:left-[90px]  px-5 md:order-1">
                <span className="text-base relative xl:bottom-[18px] font-semibold xl:mt-2 mt-4">
                  A space for appreciation
                </span>
                <span className="text-xsm text-lightred md:mt-3 mt-6">
                  REWARDS AND RECOGNITION
                </span>
                <span className="md:text-sm md:w-7/12 mt-4 leading-[28px] text-xsm w-full">
                  We believe in recognising and celebrating employees
                  milestones, innovative ideas, and drive to achieve their
                  goals.
                </span>
                <button className="text-left text-sm mt-4 text-blue">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SliderProvider>
    </div>
  );
}
