"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { jobProfiles } from "../../data";
import ActiveCard, { ContentCard } from "./ActiveCard";

const JobWithSkills = () => {
  const [activeJobIndex, setActiveJobIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveJobIndex(index);
          }
        });
      },
      {
        root: null, // The root is the viewport
        threshold: 0.3, // Adjusting to 50% visible
      }
    );

    // Observe each job card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup the observer when component unmounts
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="max-w-6xl px-3 md:px-2 text-white font-bold mt-5 flex gap-10 justify-center mx-auto relative">
      {/* <div className="flex justify-center gap-4 relative w-full "> */}
      {/* Left side: Job Listings */}

      <div className="w-full lg:w-3/5  flex flex-col justify-center">
        {jobProfiles.map((job, index) => {
          // Determine the opacity based on whether it's the active job
          const isActive = activeJobIndex === index;

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`rounded-md flex flex-col justify-start transition-opacity duration-300 ease-in-out 
                  ${isActive ? "opacity-100" : "opacity-30"}`} // Set opacity to 30 for non-active jobs
            >
              <div className="flex items-center gap-3">
                {/* Company Logo */}
                <div className="h-[50px] w-[55px] rounded-[35px] border-white border-[1px] relative overflow-hidden">
                  {job?.img && (
                    <Image
                      src={job.img}
                      alt="Logo"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: `scale(${job.scale})`,
                      }}
                    />
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <h1 className="text-2xl md:text-3xl font-semibold">
                    {job.company}
                  </h1>
                  <h3 className="text-[1.2rem] tracking-tight text-[#3276FF]">
                    {job.title} | <span>{job.duration}</span>
                  </h3>
                </div>
              </div>

              <ol className="flex flex-col pt-1 relative border-l border-white ml-[26px]">
                {job?.description &&
                  job.description.map((description, i) => (
                    <li key={i} className="mb-4 ml-1 flex flex-col">
                      <div className="absolute w-4 h-4 bg-[#2e6eed] rounded-full mt-1.5 -left-2 " />
                      <p className="ml-5 flex flex-wrap flex-row items-center justify-start text-base font-semibold">
                        {description}
                      </p>
                    </li>
                  ))}
                <ContentCard skills={job.skills} />
              </ol>
            </div>
          );
        })}
      </div>

      {/* Right side: Active Job Skills */}
      <ActiveCard skills={jobProfiles[activeJobIndex].skills} />
    </div>
    // </div>
  );
};

export default JobWithSkills;
