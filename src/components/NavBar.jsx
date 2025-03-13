import React from "react";
import { SlideTabsExample } from "./SlideTabsExample";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex ml-auto">
          <SlideTabsExample />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
