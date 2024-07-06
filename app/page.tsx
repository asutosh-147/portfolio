import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

function Home() {
  return (
    <div className="custom-scrollbar">
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
