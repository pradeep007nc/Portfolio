import React from "react";
import { Skill, skilltech } from "../../data";
import { motion } from "framer-motion";
interface ActiveCardInterface {
  skills: string[];
}

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl lg:text-2xl mb-4">Tech Stack</h2>
      <div className="text-gray-300">
        <ul className="flex flex-row flex-wrap lg:grid lg:grid-cols-2 gap-2 md:gap-4 ">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="flex gap-2 items-center border-[1px] p-2 lg:p-2 bg-gray-700 rounded-lg hover:cursor-pointer "
              whileHover={{
                scale: 1.05,
                transition: { ease: "easeInOut", duration: 0.2 },
              }}
            >
              <motion.img
                src={
                  skill in skilltech
                    ? skilltech[skill as Skill]
                    : "/icons/default-icon.png"
                }
                alt={`${skill} icon`}
                className="size-[25px] lg:size-[55px]"
              />
              <div className="text-base md:text-lg lg:text-xl tracking-tight font-bold">
                {skill}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ActiveCard: React.FC<ActiveCardInterface> = ({ skills }) => {
  return (
    <>
      <div className="lg:flex w-2/5 hidden sticky top-[100px] p-3 border-white border-[1px] rounded-md h-fit">
        <Skills skills={skills} />
      </div>
    </>
  );
};

export const ContentCard: React.FC<ActiveCardInterface> = ({ skills }) => {
  return (
    <>
      <div className="lg:hidden flex p-6 border-gray-700 rounded-md">
        <Skills skills={skills} />
      </div>
    </>
  );
};

export default ActiveCard;
