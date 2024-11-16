"use client";
import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import Logo from "@/components/Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-start items-center text-white relative h-[225px]">
      <Logo background />
      <div className="z-20 flex flex-col gap-2 items-center justify-center ml-2">
        <Socials />
        <div className="font-extrabold">pradeepnaidu2486@gmail.com</div>
        <span className="font-bold text-gray-500">Made by Me &copy; 2024</span>
      </div>
      <motion.div
        onClick={scrollToTop}
        initial={{ scale: 0, rotate: 180, x: 100, y: -100, opacity: 0 }}
        animate={{
          rotate: 360,
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeIn" },
        }}
        whileHover={{
          scale: 1.15,
          transition: { ease: "easeIn", duration: 0.25 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { ease: "easeIn", duration: 0.1 },
        }}
        className="absolute bottom-5 right-10 z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12V16H11V12H8L12 8L16 12H13Z"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Footer;
