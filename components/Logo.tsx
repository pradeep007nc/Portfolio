"use client";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  background?: boolean;
}

const Logo: React.FC<LogoProps> = ({ width, height, background }) => {
  const imageWidth = width || 200;
  const imageHeight = height || 100;

  return (
    <div
      style={{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        backgroundImage: `url("/signature.png")`,
        backgroundPosition: "center",
        backgroundSize: `${background ? "300%" : "150%"}`,
        backgroundRepeat: "no-repeat",
      }}
      className="rounded-full cursor-pointer"
    />
  );
};

export default Logo;
