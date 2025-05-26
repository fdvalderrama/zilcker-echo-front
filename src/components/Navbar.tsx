import React, { useState } from "react";
import { User, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#4B3F72]">
      <div className="relative flex justify-between h-18 items-center mx-8">
        <div className="text-xl text-white">Zilcker Echo</div>
        <div className="absolute text-white space-x-20 left-1/2 -translate-x-1/2 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Tickets</a>
          <a href="#">FAQ's</a>
          <a href="#">Contact</a>
        </div>
        <User className="text-white w-5 h-5 hidden md:flex" />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="">
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
