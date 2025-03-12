import React from "react";
import { SlideTabsExample } from "./SlideTabsExample";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Ma. Agustina Benitez</h1>
        <div className="hidden md:flex">
          <SlideTabsExample />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
