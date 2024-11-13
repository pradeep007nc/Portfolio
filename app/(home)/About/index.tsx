"use client";
import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.05 }} // Triggers when 50% of the element is visible
      className="text-white flex flex-col justify-center items-center md:min-h-screen  my-[80px]"
    >
      <div className="flex justify-center ">
        <motion.img src="/computer.svg" className="w-[80%]" />
      </div>
      <div className="bg-gradient-to-r from-[#2C3E50]  to-[#000000] w-full">
        <div className="flex flex-col justify-between items-center text-center space-y-5 md:space-y-10 py-10 max-w-6xl mx-auto">
          <p className="font-bold text-[1.8rem] md:text-4xl  transition-all duration-300 ease-in-out ">
            Hi, I&apos;m Vishnu. Nice to meet you.
          </p>
          <p className="font-semibold text-base md:text-2xl tracking-tight px-[17px] md:px-[120px]  transition-all duration-300 ease-in-out ">
            Since the beginning of my journey as a software engineer, I&apos;ve
            freelanced, collaborated with teams, and tackled projects of all
            sizes—from websites and mobile apps to backend systems. I&apos;m
            naturally curious, always learning, and love creating things that
            make an impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-[1.5px] rounded-lg bg-transparent border-white hover:text-black hover:bg-white  p-3 text-[1rem] md:text-xl font-bold"
          >
            Let&apos;s Connect
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
