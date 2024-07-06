import React from "react";
import Highlight from "./hightlight";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";

const aboutVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3.3,
      duration: 0.7,
    },
  },
};

const About = () => {
  return (
    <MotionDiv
      variants={aboutVariant}
      initial="hidden"
      animate="visible"
      className="w-3/5 text-right text-lg font-semibold"
    >
      Stepped into the Full Stack world in <Highlight>2023</Highlight>, coding
      wizard since <Highlight>2022</Highlight>. Now on the{" "}
      <Highlight>hunt for full-time opportunities</Highlight> to dazzle you with
      my cutting-edge magic.
    </MotionDiv>
  );
};

export default About;
