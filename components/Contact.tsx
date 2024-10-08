import React from "react";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";
import Highlight from "./hightlight";
import Tooltip from "./Tooltip";
const fadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 0.75,
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto mb-20 mt-48 w-full px-5 text-gray-500 sm:w-3/4 dark:text-gray-300"
    >
      <MotionDiv
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 2, type: "spring" },
        }}
        className="h-1 w-full border-t border-t-gray-400 dark:border-gray-300"
      ></MotionDiv>
      <div className="flex w-full flex-col items-center justify-center gap-10 pt-7 sm:flex-row sm:justify-between sm:gap-0">
        <div className="text-center sm:text-left">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
          >
            © 2024 All rights reserved.
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}
          >
            contact me directly at{" "}
            <Highlight>
              behuriaasutosh7@gmail.com{" "}
              <Tooltip title="mail Id" position="top" />
            </Highlight>
          </MotionDiv>
        </div>
        <a href="mailto:behuriaasutosh7@gmail.com">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.9, delay: 0.7 },
            }}
            className="rounded-lg bg-gray-900 p-3 font-semibold text-white dark:bg-gray-300 dark:text-gray-950"
          >
            Get In Touch
          </MotionDiv>
        </a>
      </div>
    </section>
  );
};

export default Contact;
