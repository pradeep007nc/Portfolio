import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Socials from "./Socials";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-4 flex justify-between items-center w-full text-white px-[18px] md:px-[150px]">
      <AnimatePresence>
        <Link
          href={"/"}
          className="rounded-[50px] overflow-hidden w-[120px] h-[80px] md:w-[140px] md:h-[100px] "
        >
          <motion.img
            initial={{ y: -20, scale: 0, opacity: 0 }}
            animate={{ y: 0, scale: 1.4, opacity: 1 }}
            exit={{ y: 20, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src="/signature.png"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </Link>
      </AnimatePresence>
      <Socials />
    </div>
  );
};

export default Navbar;
