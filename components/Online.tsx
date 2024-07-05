"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MotionDiv } from "./MotionDiv";
import { AnimatePresence, Variants } from "framer-motion";
const snoozeVariant: Variants = {
  hidden: { opacity: 0, y: 0, x: 0 },
  visible: (index) => ({
    opacity: [0, 1, 0],
    y: [0, -50],
    x: [10, -5, 0, 5, 10],
    rotate: [-5, 0, 5, -10],
    transition: {
      duration: 2,
      delay: 0.5 * index,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  }),
};
const container: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};
const Online = ({ initialTime }: { initialTime: string }) => {
  const [time, setTime] = useState<string>(initialTime);
  const online =
    time.split(" ")[2] == "AM" && Number(time.split(":")[0]) < 7 ? false : true;
  // const online = false;
  useEffect(() => {
    const interVal = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(interVal);
    };
  }, []);

  const arr = [1, 2, 3];
  return (
    <MotionDiv
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between gap-5"
    >
      <div className="relative">
        <Image
          src={"/sleeping.png"}
          width={200}
          height={10}
          alt="sleeping Koala"
          className="h-auto"
        />
        {arr.map((_, index) => {
          return (
            <MotionDiv
              key={index}
              variants={snoozeVariant}
              custom={index}
              initial="hidden"
              animate="visible"
              className="absolute top-2 text-2xl"
            >
              z
            </MotionDiv>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="rounded-sm p-1 font-bold ring-[2px] ring-black">
          {time}
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <div
            className={`size-2 rounded-full ${online ? "bg-green-500" : "bg-red-500"}`}
          ></div>
          <div>{online ? "Online" : "Offline"}</div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Online;
