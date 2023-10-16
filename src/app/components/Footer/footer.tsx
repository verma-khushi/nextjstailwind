//Client+Server
"use client";
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (
    <div className="2xl:container bg-lightgray grid grid-cols-1 xl:grid-cols-5  xl:pb-0 lg:grid-cols-3 md:grid-cols-1 gap-[2%] py-5 relative top-[300px] md:top-0 md:pb-16 pb-20">
      <div className="container xl:ml-8 mt-5 md:pl-0 pl-8  ">
        <Image
          src="/Footer.png"
          className="h-8 md:ml-8 mb-8"
          alt="Wework Logo"
          width={161}
          height={40}
          priority={true}
        />
        <p className="md:ml-8 text-xsm mb-5 ">
          Copyright © 2023 WeWork Companies Inc.
          <span>All rights reserved</span>
        </p>
        <div className="text-center text-blue text-xsm mb-8">
          <div className="flex md:ml-8 space-x-4">
            <div className="underline">Privacy </div>
            <div className="underline">Terms</div>
          </div>
          <span className="underline block mt-4 text-left md:relative md:left-8">
            Equal Opportunity Statement
          </span>
        </div>
        <Image
          src="/icons.png"
          alt="Icons"
          width={160}
          height={100}
          className="md:ml-8"
        />
      </div>

      <div className="text-base font-sans col-span-2 lg:col-span-1 mb-12 xl:ml-44 xl:pl-0 md:pl-12 pl-8 md:col-span-1 md:row-span-2 pt-4">
        <span className="font-semibold flex mb-4 text-center">Company</span>
        <div className="flex flex-col items-start justify-center text-sm text-gray space-y-7 mt-10">
          <div>Blogs</div>
          <div>Careers</div>
          <div>Impact</div>
          <div>Referrals</div>
          <div>Amenities</div>
        </div>
      </div>

      <div className="text-base font-sans col-span-2 lg:col-span-1 mb-12 xl:ml-20 xl:pl-0 md:pl-12 pl-8 md:col-span-1 md:row-span-2 pt-4">
        <span className="font-semibold flex mb-4 text-center">Support</span>
        <div className="flex flex-col items-start justify-center text-sm text-gray space-y-6 mt-10">
          <div>COVID-19</div>
          <div>Terms of service</div>
          <div>Privacy policy</div>
        </div>
      </div>

      <div className="text-base font-sans lg:col-span-1   pl-8 md:col-span-1 md:row-span-3 pt-4">
        <span className="font-semibold flex mb-4 text-center">
          Covid-19 Handbook
        </span>

        <div className="text-xsm text-gray mb-8 mt-5">
          A detailed manual outlining how we have adapted our spaces in response
          to COVID-19
        </div>
        <div className="flex ">
          <button className="bg-blue p-[14px] text-xsm rounded-md text-white">
            Get the handbook
          </button>
        </div>
      </div>

      <div className="xl:relative xl:left-[100px] xl:top-8 items-center  md:absolute md:bottom-4 md:right-3">
        <Image
          src="/Top.png"
          alt="Back To Top"
          width={80}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
