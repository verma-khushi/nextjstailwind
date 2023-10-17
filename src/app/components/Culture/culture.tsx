import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
import data from "./culture.json";
interface Culture {
  image: string;
  title: string;
  text: string;
  description: string;
}
function getCultureData() {
  return data;
}
export default function Culture() {
  const CultureData = getCultureData();
  // console.log("culturedata",CultureData);
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
            {CultureData.map((data, index) => (
              <div
                className="flex flex-col md:flex-row items-center"
                key={index}
              >
                <Image
                  src={data.image}
                  alt="sliderImage"
                  className="w-full md:w-[650px] px-4 relative md:right-[20px] mx-auto md:order-2"
                  width={300}
                  height={700}
                />

                <div className="flex flex-col text-left md:text-left bottom-[18px]  md:relative md:left-[90px]  px-5 md:order-1">
                  <span className="text-base relative xl:bottom-[18px] font-semibold xl:mt-2 mt-4">
                    {data.title}
                  </span>
                  <span className="text-xsm text-lightred md:mt-3 mt-6">
                    {data.text}
                  </span>
                  <span className="md:text-sm md:w-7/12 mt-4 leading-[28px] text-xsm w-full">
                    {data.description}
                  </span>
                  <button className="text-left text-sm mt-4 text-blue">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SliderProvider>
    </div>
  );
}
