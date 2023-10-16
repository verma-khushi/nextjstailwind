"use client";
import React, { ReactNode } from "react";
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";
interface SliderConfig {
  all: {
    enableAutoplay: boolean;
    autoplayInterval: number;
    transitionDuration: number;
    slidesToShow: number;
    slidesToScroll: number;
  };
  "(max-width: 900px)": {
    slidesToShow: number;
    slidesToScroll: number;
  };
  "(max-width: 500px)": {
    slidesToShow: number;
    slidesToScroll: number;
  };

  [query: string]: {
    slidesToShow: number;
    slidesToScroll: number;
  };
}
interface SliderProviderProps {
  children: ReactNode;
  sliderConfig?: SliderConfig; 
}


export default function SliderProvider({ children,sliderConfig }: SliderProviderProps) {
  const defaultSliderConfig = {
    all: {
      enableAutoplay: false,
      autoplayInterval: 5000,
      transitionDuration: 300,
      slidesToShow: 1,
      slidesToScroll: 3,
    },
    "(max-width: 900px)": {
      slidesToShow: 1,
      slidesToScroll: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  };
  const elRef = useBlazeSlider(sliderConfig || defaultSliderConfig);
  return (
    <div className=" relative blaze-slider " ref={elRef}>
      {children}
    </div>
  );
}
