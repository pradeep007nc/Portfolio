"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../Subcomponents/Navbar";

export function GridBackground() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-large-grid relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"></div>
      <div className=" text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 w-full flex-col flex  gap-[0.65rem]">
        <p className="text-[0.850rem] uppercase">Based in Dandeli</p>
        <h1 className="m-auto w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[48vw] text-3xl sm:text-5xl md:text-[3.40rem] lg:text-[3.8rem] text-white transition-all duration-300 ease-in-out font-smooth">
          Software Engineer
          <span className="text-[#3276FF]">
            {" "}
            {` `}Specializing in Web & Mobile{" "}
          </span>
          Applications
        </h1>
        <p className="px-3 text-[0.8rem] md:text-[1rem] font-semibold">
          Hi, I&apos;m <span className="text-white font-bold">Vishnu</span>, I
          create solutions across all layers of Full-Stack Applications
        </p>
        <div className="flex flex-row-reverse justify-center items-center gap-5 text-white">
          <div className="flex items-center gap-1">
            <div className="text-[#3276FF] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                strokeWidth="3"
              >
                <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
              </svg>
            </div>
            <span className="mb-[2px]">Resume</span>
          </div>
          <Link
            href={"/projects"}
            className="bg-stone-800 p-2  w-[5.5rem] rounded-lg border-[1px] hover:bg-white hover:text-stone-800 border-white hover:border-[1px] hover:scale-110 text-[0.95rem] font-bold transition-all ease-in-out duration-300"
          >
            Projects
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
