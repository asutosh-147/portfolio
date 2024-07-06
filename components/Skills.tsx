"use client";
import { skills } from "@/lib/skillsData";
import React from "react";
import { Md10K } from "react-icons/md";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";
import { TextRevealCard } from "./magicui/text-reveal-card";
import Tooltip from "./Tooltip";

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
      className="mx-auto mb-48 mt-20 flex w-3/5 flex-col items-start gap-8"
    >
      <MotionDiv
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        custom={1}
        className="mx-auto"
      >
        <TextRevealCard
          className="bg-transparent dark:text-gray-300 text-center"
          text="You Got The Ideas"
          revealText="I Got The Skills"
        ></TextRevealCard>
      </MotionDiv>
      {reducedSkills.map((skillArr, i) => {
        return (
          <div
            key={i}
            className={`flex justify-center gap-10`}
            style={{ paddingLeft: i * 100 }}
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
                  className="relative flex items-center justify-between gap-2 rounded-md border-2 border-black dark:border-gray-800 bg-white dark:bg-gray-300 p-1 dark:text-gray-950"
                >
                  <Icon className="flex-1 text-xl" />
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
