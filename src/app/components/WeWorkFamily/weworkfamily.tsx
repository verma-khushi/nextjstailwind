import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
import data from "./weworkfamily.json";
interface WeWorkFamily {
  image: string;
  title: string;
}
function getweworkfamily() {
  return data;
}
export default function WeWorkFamily() {
  const Familyconfig = {
    all: {
      enableAutoplay: false,
      autoplayInterval: 3000,
      transitionDuration: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
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
  const family = getweworkfamily();
  // console.log("family",family)
  return (
    <div className=" 2xl:container bg-lightorange   relative  md:top-[-1px] top-[150px] pb-12 py-3">
      <SliderProvider sliderConfig={Familyconfig}>
        <div className="flex justify-between  md:p-6 relative top-10  mx-4">
          <h1 className=" font-semibold   md:text-xl relative  right-2 bottom-4 text-base mx-4">
            The WeWork family
          </h1>

          <div className="controls relative md:left-2 md:bottom-[54px] bottom-16">
            <button className="blaze-prev" aria-label="Move To previous slide">
              <ArrowLeft />
            </button>

            <button className="blaze-next " aria-label="Move To next slide">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="blaze-track-container mx-16">
          <div className="blaze-track">
            {family.map((data, index) => (
              <div key={index}>
                <Image
                  src={data.image}
                  alt="teamMember"
                  width={390}
                  height={200}
                  className=""
                  objectFit="contain"
                />
                <div className="relative text-[14px] items-center  ">
                  <h2 className="md:text-[28px] text-base ">{data.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SliderProvider>
    </div>
  );
}
