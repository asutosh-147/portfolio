"use client";
import { projectsData } from "@/lib/ProjectsData";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { MotionDiv } from "./MotionDiv";
type projectData = (typeof projectsData)[number];
const Project = ({ description, imageUrl, tags, title }: projectData) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const transformedScaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.8, 1],
  );
  const transformedOpacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.6, 1],
  );
  return (
    <MotionDiv
      style={{
        opacity: transformedOpacityProgress,
        scale: transformedScaleProgress,
      }}
      ref={ref}
      className="group relative h-72 w-3/5 overflow-hidden rounded-lg bg-gray-100 p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end hover:bg-gray-300 dark:bg-white/30 dark:hover:bg-white/40 dark:text-gray-100"
    >
      <div className="flex h-full w-[45%] flex-col">
        <div className="text-xl font-semibold">{title}</div>
        <div className="font-normal">{description}</div>
        <ul className="mt-auto flex flex-wrap gap-2 text-sm">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="flex cursor-default rounded-lg dark:bg-gray-800 bg-gray-500 p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        className="absolute -right-40 top-9 w-[28rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 group-hover:-translate-x-5 group-hover:translate-y-1 group-hover:rotate-0"
      />
    </MotionDiv>
  );
};

export default Project;
