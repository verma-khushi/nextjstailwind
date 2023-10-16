// import fs from "fs";
// import path from "path";
// import React from "react";
// import TestimonialSlider from "./MobileTestimonialSlider";
// import Image from "next/image";

// function getTestimonialServerData() {
//   const filePath = path.join(
//     process.cwd(),
//     "src/app/components/Testimonials/testimonials.json"
//   );
//   const jsonData = fs.readFileSync(filePath, "utf-8");
//   const data = JSON.parse(jsonData);
//   return data;
// }

// type TestimonialProps = {
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
// };

// export const getStaticProps = async () => {
//   const data = await getTestimonialServerData();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// export default async function Team({ data }: { data: TestimonialProps[] }) {
//   // const data=await getTestimonialServerData()
//   console.log("Data::", data);

//   return (
//     <>
//       <div className="2xl:container bg-lightblue py-16 px-24 desktop-view">
//         <div className="relative bottom-8">
//           <h1 className="lg:text-xl font-semibold text-center text-base">
//             Hear from our team
//           </h1>
//           <div className="lg:grid lg:gap-12 lg:grid-cols-3 lg:space-y-0 md:grid-cols-1 md:space-y-28 md:p-30 py-6">
//             <div className="bg-white rounded-lg w-full">
//               {data &&
//                 data.map((testimonial: TestimonialProps, index: number) => (
//                   <div key={index} className="bg-white p-10 rounded-lg w-full">
//                     <Image
//                       src={testimonial.image}
//                       alt={`teamMember-${index}`}
//                       width={124}
//                       height={124}
//                       objectFit="contain"
//                     />
//                     <p className="text-center text-xsm">{testimonial.quote}</p>
//                     <div className="text-center relative lg:top-[120px] items-center">
//                       <h2 className="text-[18px] font-[700] ">
//                         {testimonial.name}
//                       </h2>
//                       <span className="">{testimonial.role}</span>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Mobile-slider">
//         <TestimonialSlider />
//       </div>
//     </>
//   );
// }
import fs from "fs";
import path from "path";
import "../../style.css";
import "../../styles/testimonials.css";
import React from "react";
import TestimonialSlider from "./MobileTestimonialSlider";
import Image from "next/image";
import data from "./testimonials.json";
function getTestimonialserverdata() {
  return data;
}
type TestimonialProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
};
// type TeamProps = {
//   testimonials: TestimonialProps[];
// };
export default async function Team() {
  const data = await getTestimonialserverdata();
  console.log(data);
  
  return (
    <>
      <div className="2xl:container bg-lightblue py-16 px-24 desktop-view">
        <div className="relative bottom-8">
          <h1 className="lg:text-xl font-semibold text-center  text-base">
            Hear from our team
          </h1>
          <div className="lg:grid lg:gap-12 lg:grid-cols-3 lg:space-y-0 md:grid-cols-1 md:space-y-28 md:p-30  py-6">
            <div className="bg-white   rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-10  rounded-lg w-full"
                  >
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
                    <div className="text-center relative lg:top-[120px]  items-center">
                      <h2 className="text-[18px] font-[700] ">
                        {testimonial.name}
                      </h2>
                      <span className="">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="bg-white   rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-10  rounded-lg w-full"
                  >
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
                    <div className="text-center relative lg:top-[120px]  items-center">
                      <h2 className="text-[18px] font-[700] ">
                        {testimonial.name}
                      </h2>
                      <span className="">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="bg-white   rounded-lg w-full">
              {data &&
                data.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-10  rounded-lg w-full"
                  >
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
                    <div className="text-center relative lg:top-[120px]  items-center">
                      <h2 className="text-[18px] font-[700] ">
                        {testimonial.name}
                      </h2>
                      <span className="">{testimonial.role}</span>
                    </div>
                  </div>
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