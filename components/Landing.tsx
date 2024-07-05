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
    <div id="home" className="mx-auto w-3/4">
      <MotionDiv
        className="fixed right-72 top-0 -z-[1] h-[31.5rem] w-[31.5rem] rounded-full bg-[#fbe2e3] blur-[8rem]"
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
      />
      <MotionDiv
        className="fixed left-52 top-10 -z-[1] h-[31.5rem] w-[31.5rem] rounded-full bg-[#e2f1fb] blur-[8rem]"
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
      />
      <div className="mt-2 flex w-full items-center justify-around p-4">
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
              className="mb-3 h-1 flex-1 rounded-full bg-gradient-to-r from-black"
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
                width={300}
                height={300}
                className="rounded-full shadow-2xl"
              />
              <Tooltip title="yeah, that's me :)" position="top" />
            </div>
          </CardContainer>
        </MotionDiv>
      </div>
      <div className="mx-auto flex w-3/4 items-center justify-between">
        <Online initialTime={new Date().toLocaleTimeString()} />
        <About />
      </div>
    </div>
  );
}

export default Landing;
