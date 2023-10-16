import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import "../../styles/leader.css";
import SliderProvider from "../SliderProvider";
export default function Leaders() {
  const leadersSliderConfig = {
    all: {
      enableAutoplay: false,
      autoplayInterval: 5000,
      transitionDuration: 300,
      slidesToShow: 3.5,
      slidesToScroll: 3.5,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  };
  return (
    <div className=" 2xl:container   md:p-12 p-4 relative   md:top-[-76px] right-3 top-[150px]">
      <SliderProvider sliderConfig={leadersSliderConfig}>
        <div className="flex justify-between  md:p-10 relative top-10 p-4 mx-4">
          <h1 className=" font-semibold  md:text-xl relative md:right-10 right-2 text-base">
            Our leaders
          </h1>
          <div className="controls relative left-10 md:bottom-[44px] bottom-12">
            <button className="blaze-prev" aria-label="Move To previous slide">
              <ArrowLeft />
            </button>

            <button className="blaze-next " aria-label="Move To next slide">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="blaze-track-container relative lg:left-0 md:left-2 left-3">
          <div className="blaze-track mx-4">
            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>
            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>
            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>
            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>
            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>

            <div className="bg-white rounded-lg ">
              <Image
                src="/Leaders.png"
                alt="teamMember"
                width={359}
                height={199}
                className=""
                objectFit="contain"
              />
              <div
                className="text-center relative text-[14px] items-center border  p-8 2xl:w-[92.5%] leaders"
                style={{ border: "1px solid lightgray" }}
              >
                <h2 className=" text-[18px] text-blue">Karan Virwani</h2>
                <span className="text-sm">CEO, WeWork India</span>
              </div>
            </div>
          </div>
        </div>
      </SliderProvider>
    </div>
  );
}
