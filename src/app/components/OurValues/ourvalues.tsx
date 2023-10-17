import React from "react";
import "../../styles/ourvalues.css";
import AccordionItem from "./Accordian";

import AccordianSlider from "./MobileSlider";
import "../../styles/ourvalues.css";

export default function OurValues() {
  return (
    <div>
      <div className="2xl:container relative md:top-0 top-[200px] pb-10 desktop-view">
        <h1 className="lg:text-xl font-semibold  relative md:left-[70px] left-[10px] md:text-base text-base ">
          Our values
        </h1>
        <div className="flex flex-col space-y-3 pl-20 mt-10">
          <AccordionItem
            title="Do the right thing"
            content="We know the ‘right thing’ is a deliberate action we must always take, and that it is based on integrity and builds trust with our people, members and our community. We show ownership in solving problems and making decisions. Each of us has an obligation to question actions inconsistent with our values."
            image={{
              src: "/accordian.webp",
              alt: "Accordian Image",
              width: 250,
              height: 250,
            }}
          />

          <AccordionItem
            title="Strive to win together"
            content="We’ve always believed that we are better together - and operate like a team sport. We must operate with a shared purpose to constantly improve and grow by accomplishing big, audacious goals and hitting stretch targets. We seek to win in the marketplace and outpace the competition."
            image={{
              src: "/accordian2.webp",
              alt: "Accordian Image",
              width: 250,
              height: 250,
            }}
          />
          <AccordionItem
            title="Be entrepreneurial"
            content="We stick our necks out and take risks; if we are not failing, we are not trying. We are committed to cutting edge innovation. We will see change as a catalyst and an opportunity."
            image={{
              src: "/accordian3.webp",
              alt: "Accordian Image",
              width: 250,
              height: 250,
            }}
          />
          <AccordionItem
            title="Be sustainable"
            content="We care about our planet and will be mindful in our strategy and actions. We acknowledge the urgency of the climate change crisis and will start to create a positive impact on the environment through our product, operations, supply chain management, and our community."
            image={{
              src: "/accordian4.webp",
              alt: "Accordian Image",
              width: 250,
              height: 250,
            }}
          />
          <AccordionItem
            title="Be human , be kind"
            content="We are grateful for our people, members and our greater community, as well as for the opportunities we have in front of us. Collaboration, kindness and authenticity are essential to our humanity. We will build a community that celebrates diversity through each person’s unique talents, passions and backgrounds. We recognise that we are human, that we have biases and are committed to grow past them."
            image={{
              src: "/accordian5.webp",
              alt: "Accordian Image",
              width: 250,
              height: 250,
            }}
          />
        </div>
      </div>

      <div className="Mobile-slider">
        <AccordianSlider />
      </div>
    </div>
  );
}
