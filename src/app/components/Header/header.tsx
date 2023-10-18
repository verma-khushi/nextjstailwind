"use client";
import React, { useState } from "react";
import Image from "next/image";
import data from "./header.json";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <nav
      className="flex fixed w-full bg-white top-0 left-0 z-20"
      id="top-section"
    >
      {}
      {isNavOpen ? null : (
        <div className="2xl:container max-w-screen-xl relative left-[20px] flex gap-[10px] items-center p-7">
          <a href="" className="flex">
            <Image
              src="/Logo.png"
              className="h-8 relative xl:right-0 md:right-8 right-6"
              alt="Wework Logo"
              width={120}
              height={47}
              priority={true}
            />
          </a>
          <div
            className="items-center justify-between md:hidden xl:flex hidden relative md:left-12 md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex font-sans md:flex-row md:space-x-8">
              {data.MenuItems.map((data, index) => (
                <li key={index}>
                  <a href={data.url}>{data.text}</a>
                </li>
              ))}
            </ul>
            <div className="relative 2xl:left-[670px] md:left-[560px] space-x-10">
              <button className="font-sans">Login</button>
              <button className="bg-blue p-3 text-white text-[15px] font-medium rounded font-sans">
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex md:order-2 relative 2xl:ml-0 md:ml-auto ml-auto right-4 h-full top-6">
        {isNavOpen ? (
          <div>
            <button
              onClick={closeNavbar}
              className="inline-flex items-center  w-10 h-10 justify-center   "
              aria-controls="navbar-sticky"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className=""
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#111827"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <div className="fixed left-0  bg-white shadow-lg w-full">
              <ul className="p-16 space-y-10 text-center">
                {data.MenuItems.map((data, index) => (
                  <li key={index}>
                    <a href={data.url}>{data.text}</a>
                  </li>
                ))}
                <div className="flex flex-col space-y-3">
                  <button className="font-sans">Login</button>
                  <button className="bg-blue p-3 text-white text-[15px] font-medium rounded font-sans">
                    Contact us
                  </button>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xsm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 "
            aria-controls="navbar-sticky"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}
