import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
export default function AccordianSlider() {
  return (
    <div className=" 2xl:container bg-white p-2  relative   top-[130px]  pb-6">
      <SliderProvider>
        <div className="flex justify-between gap-[10px] relative md:bottom-11 bottom-4 top-3">
          <h1 className="md:text-xl font-semibold relative md:left-[70px] left-[10px] text-base">
            Our values
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
        <div className="blaze-track-container relative top-[20px]">
          <div className="blaze-track">
            <div className=" ">
              <div className="bg-white rounded-lg py-12 px-10">
                <Image
                  src="/accordian.webp"
                  alt="teamMember"
                  width={150}
                  height={150}
                  className="mx-auto relative bottom-12"
                  objectFit="contain"
                />
                <h3 className="text-sm font-semibold text-center">
                  Do the right thing
                </h3>
                <p className="text-center text-xsm relative top-5">
                  “The past two years at WeWork have been extremely valuable and
                  life changing. I am fortunate to be surrounded by hard working
                  colleagues, inspiring mentors and authentic leaders who have
                  invested and continue to contribute to my experience here”
                </p>
              </div>
            </div>
            <div className=" ">
              <div className="bg-white rounded-lg py-12 px-10">
                <Image
                  src="/accordian2.webp"
                  alt="teamMember"
                  width={150}
                  height={150}
                  className="mx-auto relative bottom-12"
                  objectFit="contain"
                />
                <h3 className="text-sm font-semibold text-center">
                  Do the right thing
                </h3>
                <p className="text-center text-xsm relative top-5">
                  “The past two years at WeWork have been extremely valuable and
                  life changing. I am fortunate to be surrounded by hard working
                  colleagues, inspiring mentors and authentic leaders who have
                  invested and continue to contribute to my experience here”
                </p>
              </div>
            </div>
            <div className=" ">
              <div className="bg-white rounded-lg py-12 px-10">
                <Image
                  src="/accordian3.webp"
                  alt="teamMember"
                  width={150}
                  height={150}
                  className="mx-auto relative bottom-12"
                  objectFit="contain"
                />
                <h3 className="text-sm font-semibold text-center">
                  Do the right thing
                </h3>
                <p className="text-center text-xsm relative top-5">
                  “The past two years at WeWork have been extremely valuable and
                  life changing. I am fortunate to be surrounded by hard working
                  colleagues, inspiring mentors and authentic leaders who have
                  invested and continue to contribute to my experience here”
                </p>
              </div>
            </div>
          </div>
        </div>
      </SliderProvider>
    </div>
  );
}
