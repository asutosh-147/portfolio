// "use client";
import React from "react";
import GradualSpacing from "./magicui/gradual-spacing";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import { CardContainer } from "./magicui/3d-card";
import { TextGenerateEffect } from "./magicui/text-generate";
import { Variants } from "framer-motion";
import Tooltip from "./Tooltip";
import About from "./About";
import Online from "./Online";
import Highlight from "./hightlight";
import Socials from "./Socials";

export const fadeVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};
const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 1,
      when: "beforeChildren",
    },
  },
};
function Landing() {
  return (
    <div id="home" className="relative mx-auto w-full xl:w-3/4 ">
      <MotionDiv
        className="absolute right-1 top-8 -z-[1] h-[31.5rem] w-[31.5rem] rounded-full bg-[#fbe2e3] blur-[8rem] transition-colors duration-300 sm:right-44 dark:bg-[#946263]"
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
      />
      <MotionDiv
        className="absolute -top-5 left-5 -z-[1] h-[35.5rem] w-[31.5rem] rounded-full bg-[#e2f1fb] blur-[8rem] transition-colors duration-300 sm:left-20 dark:bg-[#676394]"
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
      />
      <div className="mt-2 flex w-full flex-col-reverse items-center justify-center p-4 sm:flex-row sm:justify-around">
        <MotionDiv
          className="flex flex-col"
          initial="hidden"
          animate="visible"
          variants={fadeVariant}
        >
          <div className="flex items-end gap-1">
            <TextGenerateEffect words={"👋Hi, It's"} />
            <MotionDiv
              initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
              animate={{
                scaleX: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              className="mb-3 h-1 flex-1 rounded-full bg-gradient-to-r from-black dark:from-gray-200"
            />
          </div>
          <GradualSpacing
            text="Asutosh"
            duration={1}
            delayMultiple={0.1}
            className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-7xl font-bold text-transparent"
          />
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-1 text-xl"
          >
            <MotionDiv variants={itemVariant} className="font-semibold">
              <Highlight>
                Full Stack
                <Tooltip title="Obviously" position="left" />
              </Highlight>
              Developer.
            </MotionDiv>
            <MotionDiv variants={itemVariant} className="font-semibold">
              An{" "}
              <Highlight>
                CSE
                <Tooltip title="At VSSUT" position="left" />
              </Highlight>
              Undergrad.
            </MotionDiv>
            <MotionDiv variants={itemVariant} className="font-semibold">
              Solves{" "}
              <Highlight>
                Problems
                <Tooltip title="Too Many" position="left" />
              </Highlight>
              that don&apos;t exist.
            </MotionDiv>
            <Socials itemVariant={itemVariant} />
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          <CardContainer>
            <div className="group">
              <Image
                src={"/ProfilePic.jpg"}
                alt="profile-pic"
                width={250}
                height={250}
                className="w-32 rounded-full shadow-2xl sm:w-72"
              />
              <Tooltip title="yeah, that's me :)" position="top" />
            </div>
          </CardContainer>
        </MotionDiv>
      </div>
      <div className="mt-6 flex mx-auto w-full flex-col items-center justify-between sm:mt-0 sm:w-4/5 sm:flex-row">
        <Online initialTime={new Date().toLocaleTimeString()} />
        <About />
      </div>
    </div>
  );
}

export default Landing;
