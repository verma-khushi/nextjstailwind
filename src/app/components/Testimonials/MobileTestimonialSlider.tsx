import "../../style.css";
import Image from "next/image";
import ArrowLeft from "../../../../svg-components/ArrowLeft";
import ArrowRight from "../../../../svg-components/ArrowRight";
import SliderProvider from "../SliderProvider";
import data from "./testimonials.json";
function getTestimonialserverdata() {
  return data;
}
export default async function TestimonialSlide() {
  const data = await getTestimonialserverdata();
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
                      <>
                        <div key={index} className="">
                          <Image
                            src={testimonial.image}
                            alt={`teamMember-${index}`}
                            width={124}
                            height={124}
                            className="mx-auto relative bottom-6"
                            objectFit="contain"
                          />
                          <p className="text-center text-xsm  ">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="text-center relative text-[14px]  items-center py-5">
                          <h2 className=" font-[700] ">{testimonial.name}</h2>
                          <span className="">{testimonial.role}</span>
                        </div>
                      </>
                    ))}
                </div>
              </div>
              <div className=" ">
                <div className="bg-white rounded-lg py-16 px-10">
                  {data &&
                    data.map((testimonial, index) => (
                      <>
                        <div key={index} className="">
                          <Image
                            src={testimonial.image}
                            alt={`teamMember-${index}`}
                            width={124}
                            height={124}
                            className="mx-auto relative bottom-6"
                            objectFit="contain"
                          />
                          <p className="text-center text-xsm  ">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="text-center relative text-[14px]  items-center py-5">
                          <h2 className=" font-[700] ">{testimonial.name}</h2>
                          <span className="">{testimonial.role}</span>
                        </div>
                      </>
                    ))}
                </div>
              </div>
              <div className=" ">
                <div className="bg-white rounded-lg py-16 px-10">
                  {data &&
                    data.map((testimonial, index) => (
                      <>
                        <div key={index} className="">
                          <Image
                            src={testimonial.image}
                            alt={`teamMember-${index}`}
                            width={124}
                            height={124}
                            className="mx-auto relative bottom-6"
                            objectFit="contain"
                          />
                          <p className="text-center text-xsm  ">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="text-center relative text-[14px]  items-center py-5">
                          <h2 className=" font-[700] ">{testimonial.name}</h2>
                          <span className="">{testimonial.role}</span>
                        </div>
                      </>
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
