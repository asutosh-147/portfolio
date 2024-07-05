import React from "react";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import Tooltip from "./Tooltip";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = ({ itemVariant }: { itemVariant: Variants }) => {
  return (
    <div className="mt-8 flex justify-center gap-7">
      <MotionDiv
        variants={itemVariant}
        className="group relative cursor-pointer"
      >
        <Link href={"https://github.com/asutosh-147"} target="_blank">
          <IoLogoGithub className="size-7" />
        </Link>
        <Tooltip title="Github" position="bottom" />
      </MotionDiv>
      <MotionDiv
        variants={itemVariant}
        className="group relative cursor-pointer"
      >
        <Link
          href={"https://www.linkedin.com/in/asutosh-behuria-a692aa2b8/"}
          target="_blank"
        >
          <FaLinkedinIn className="size-7" />
        </Link>
        <Tooltip title="linkeIn" position="bottom" />
      </MotionDiv>
      <MotionDiv
        variants={itemVariant}
        className="group relative cursor-pointer"
      >
        <Link href={"https://leetcode.com/u/Ashutosh_147/"} target="_blank">
          <SiLeetcode className="size-7" />
        </Link>
        <Tooltip title="Leetcode" position="bottom" />
      </MotionDiv>
    </div>
  );
};

export default Socials;
