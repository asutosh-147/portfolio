import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <>
      <div className="fixed left-3 top-1/2 -translate-y-1/2 p-1 backdrop-blur-lg">
        <Dock magnification={55} className="gap-3 border-gray-300">
          <DockIcon>
            <HomeIcon className="size-6" />
          </DockIcon>
          <DockIcon>
            <CodeBracketIcon className="size-6" />
          </DockIcon>
          <DockIcon>
            <UserIcon className="size-6" />
          </DockIcon>
          <DockIcon>
            <EnvelopeIcon className="size-6" />
          </DockIcon>
        </Dock>
      </div>
      
    </>
  );
};

export default Navbar;
