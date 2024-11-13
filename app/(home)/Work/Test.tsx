"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollColorChangeDiv = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("bg-blue-300"); // Initial color is blue

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        // When the div reaches the top 40px of the viewport
        if (top <= 40) {
          setColor("bg-red-300");
        }
        // When the div reaches the bottom 40px of the viewport
        else if (bottom <= window.innerHeight + 40) {
          setColor("bg-green-300");
        }
        // When the div is in the middle of the screen
        else if (top > 40 && bottom > window.innerHeight - 40) {
          setColor("bg-blue-300");
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      className={`transition-colors duration-300 ease-in-out ${color} p-6`}
      style={{ height: "200px" }} // Set height to make the div scrollable
      // Using framer motion's 'animate' property to animate color change
      animate={{ backgroundColor: color }}
      transition={{ duration: 0.3 }}
    >
      Scroll me!
    </motion.div>
  );
};

export default ScrollColorChangeDiv;
