import React from "react";

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="group relative cursor-pointer font-bold text-orange-400 transition-colors duration-300 hover:text-orange-600">
        {children}
      </span>{" "}
    </>
  );
}

export default Highlight;
