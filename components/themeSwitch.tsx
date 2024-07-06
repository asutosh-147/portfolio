"use client";

import { useTheme } from "@/context/themeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Tooltip from "./Tooltip";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="group relative m-auto">
      <button
        className="fixed z-[1] bottom-28 right-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white bg-opacity-80 shadow-lg backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-800 dark:text-white"
        onClick={toggleTheme}
      >
        <Tooltip title="theme" position="left" />
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
