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
    <section id="contact" className="mx-auto mb-10 mt-48 w-3/4 text-gray-500">
      <div className="h-1 w-full border-t border-t-gray-400"></div>
      <div className="flex w-full items-center justify-between pt-2">
        <div>
          <div>© 2024 All rights reserved.</div>
          <div>
            contact me directly at{" "}
            <Highlight>
              behuriaasutosh7@gmail.com <Tooltip title="mail Id" position="top" />
            </Highlight>
          </div>
        </div>
        <a href="mailto:behuriaasutosh7@gmail.com">
          <div className="rounded-lg bg-gray-900 p-3 text-white">
            Get In Touch
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
