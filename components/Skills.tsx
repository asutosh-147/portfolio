"use client";
import { skills } from "@/lib/skillsData";
import React from "react";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";
import { TextRevealCard } from "./magicui/text-reveal-card";
type reducedSkill = (typeof skills)[];
const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: (d) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.25 * d,
    },
  }),
};
const Skills = () => {
  const reducedSkills = skills.reduce((accumulator, curr, index, arr) => {
    if (index % 4 == 0) {
      accumulator.push(arr.slice(index, index + 4));
    }
    return accumulator;
  }, [] as reducedSkill);
  let del = 0;
  return (
    <div
      id="skills"
      className="mx-auto sm:mb-48 sm:mt-20 flex w-full xl:w-4/5 flex-col p-1 items-center gap-8"
    >
      <MotionDiv
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        custom={1}
        // className=""
      >
        <TextRevealCard
          className="bg-transparent text-xl text-center dark:text-gray-300"
          text="You Got The Ideas"
          revealText="I Got The Skills"
        ></TextRevealCard>
      </MotionDiv>
      {reducedSkills.map((skillArr, i) => {
        return (
          <div
            key={i}
            className={`staggerContainer grid grid-cols-2 w-4/5 md:w-3/5 lg:grid-cols-4 gap-10 lg:w-auto`}
            style={
              {
                "--dynamic-padding-left": `calc(${i * 70}px)`,
              } as React.CSSProperties
            }
          >
            {skillArr.map(({ name, Icon }, j) => {
              del++;
              return (
                <MotionDiv
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  custom={del}
                  key={j}
                  className="relative flex w-full lg:w-[8rem] items-center justify-center gap-2 rounded-md border-2 border-black bg-white p-1 dark:border-gray-800 dark:bg-gray-300 dark:text-gray-950"
                >
                  <Icon className="text-xl" />
                  <div className="font-semibold">{name}</div>
                  <div className="absolute inset-0 -bottom-1 -right-1 -z-[1] rounded-[inherit] bg-black dark:bg-gray-50"></div>
                </MotionDiv>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
