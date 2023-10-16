import data from "./testimonials.json";
import Image from "next/image";
import React from "react";
function getTestimonialserverdata() {
  return data;
}
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default async function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const data = await getTestimonialserverdata();
  //   console.log("carddata",data);
  return (
    <div className="">
      {data &&
        data.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial.image}
              alt={`teamMember-${index}`}
              width={124}
              height={124}
              className="mx-auto relative bottom-6"
              objectFit="contain"
            />
            <p className="text-center text-xsm  ">{testimonial.quote}</p>
            <div className="text-center relative lg:top-[150px]  items-center py-5">
              <h2 className="md:text-[18px] font-[700] text-xsm">
                {testimonial.name}
              </h2>
              <span className="">{testimonial.role}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
