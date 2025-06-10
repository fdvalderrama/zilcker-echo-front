import React, { useState } from "react";
import { User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <nav className="bg-[#4B3F72]">
      <div className="relative flex justify-between h-18 items-center mx-8">
        <div
          className="text-xl text-white cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Zilcker Echo
        </div>
        <ul className="absolute text-white space-x-20 left-1/2 -translate-x-1/2 hidden md:flex">
          <li
            className="relative cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => handleNavigation("/getTickets")}
          >
            Tickets
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => handleNavigation("")}
          >
            FAQ's
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => handleNavigation("")}
          >
            Contact
          </li>
        </ul>
        <button
          onClick={() => handleNavigation("/login")}
          className="cursor-pointer"
        >
          <User className="text-white w-5 h-5 hidden md:flex" />
        </button>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
