import React from "react";
import { SlideTabs } from "./SlideTabs";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white p-4 fixed top-0 left-0 w-full z-1000">
      <div className="container mx-auto flex justify-center md:justify-between items-center">
        <div className="flex justify-center md:ml-auto">
          <SlideTabs />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
