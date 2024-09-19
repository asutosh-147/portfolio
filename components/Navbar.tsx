import React from "react";
import { Dock, DockIcon, dockSlideLeft } from "./magicui/dock";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
  LinkIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { BorderBeam } from "./magicui/border-beam";
import Tooltip from "./Tooltip";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";
const fade: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const icons = [
  {
    link: "#home",
    Icon: HomeIcon,
  },
  {
    link: "#projects",
    Icon: CodeBracketIcon,
  },
  {
    link: "#skills",
    Icon: UserIcon,
  },
  {
    link: "#contact",
    Icon: EnvelopeIcon,
  },
];

const Navbar = () => {
  return (
    <>
      <div className="invisible fixed right-6 top-1/2 z-50 -translate-y-1/2 rounded-2xl p-1 backdrop-blur-lg sm:visible">
        <Dock
          magnification={55}
          className="relative gap-3 border-gray-300 shadow-xl dark:border-none dark:bg-gray-800"
        >
          {icons.map(({ link, Icon }, index) => {
            return (
              <DockIcon key={index} className="dark:bg-gray-700">
                <Link href={link}>
                  <Icon className="size-6 dark:text-gray-100" />
                </Link>
              </DockIcon>
            );
          })}
          <BorderBeam
            borderWidth={1}
            size={90}
            className=""
            colorFrom="#374151"
            colorTo="#374151"
            duration={5}
            delay={9}
          />
        </Dock>
      </div>
      <MotionDiv
        variants={fade}
        initial="hidden"
        animate="visible"
        className="fixed bottom-10 right-7 z-10 size-11 rounded-full bg-black p-2 text-white transition-all duration-300 hover:scale-110 dark:bg-gray-800"
      >
        <Link href={process.env.RESUME_LINK as string} target="_blank">
          <div className="group relative">
            <LinkIcon className="animate-spin-slow" />
            <Tooltip title="CV" position="left" />
          </div>
        </Link>
      </MotionDiv>
    </>
  );
};

export default Navbar;
