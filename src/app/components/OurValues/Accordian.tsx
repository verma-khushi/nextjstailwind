"use client";
import React, { useState } from "react";
import "../../styles/ourvalues.css";
import Image from "next/image";
interface AccordionItemProps {
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      <div
        className={`pl-4  ${isOpen && "accordian_container"}
    `}
      >
        <div
          className="flex items-center justify-between cursor-pointer "
          onClick={toggleAccordion}
        >
          <h2
            className={`text-base font-sans  font-semibold text-darkgray  
              ${isOpen && "accordian_title"}
              `}
          >
            {title}
          </h2>
        </div>
        {isOpen && (
          <div className="text-sm leading-[28px] font-light w-5/12  mt-2">
            {content}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="md:container md:pr-32">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className=""
            priority={true}
          />
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
