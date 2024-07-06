import React from "react";
import { Variants } from "framer-motion";
import { MotionDiv } from "./MotionDiv";
import Project from "./AllProjects";
import { projectsData } from "@/lib/ProjectsData";
const fadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 0.85,
    scale: 1,
    transition: {
      delay: 0.3,
    },
  },
};
const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto mb-10 mt-32 flex w-3/4 scroll-mt-24 justify-center"
    >
      <div className="flex w-full flex-col">
        <MotionDiv
          variants={fadeVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="self-center text-5xl font-bold dark:text-gray-100"
        >
          Personal Projects
        </MotionDiv>
        <div className="mt-16 flex w-full flex-col items-center gap-5">
          {projectsData.map((projectData, index) => {
            return <Project key={index} {...projectData} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
