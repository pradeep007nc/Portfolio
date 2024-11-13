"use client";
import React from "react";
import JobProfileListing from "./JobProfileListing";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.05 }} //
      className="min-h-screen text-white my-10 w-screen"
    >
      <div className="max-w-6xl w-full mx-auto px-3">
        <h1 className="font-bold  text-4xl md:text-5xl transition-all duration-300 ease-in-out  ">
          Work Experience
        </h1>
      </div>
      <JobProfileListing />
    </motion.div>
  );
};

export default Work;
