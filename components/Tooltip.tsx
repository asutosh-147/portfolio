import { cn } from "@/lib/utils";
import React from "react";

const Tooltip = ({
  title,
  position = "top",
}: {
  title: string;
  position?: "top" | "left" | "right" | "bottom";
}) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };
  return (
    <label
      className={cn(
        "back pointer-events-none absolute mb-3 w-max scale-0 rounded-lg bg-gray-900 px-3 text-center text-lg font-semibold capitalize text-white transition-all duration-300 group-hover:scale-100",
        positionClasses[position],
      )}
    >
      {title}
    </label>
  );
};

export default Tooltip;
