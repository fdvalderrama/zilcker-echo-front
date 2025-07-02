import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
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
          <div className="flex flex-row gap-5">
            <button
              onClick={() => handleNavigation("/login")}
              className="cursor-pointer"
            >
              <User className="text-white w-5 h-5" />
            </button>

            <button onClick={toggleMenu} className="cursor-pointer md:hidden">
              <Menu className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-1" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 w-64 h-full bg-[#4B3F72] z-2">
            <div className="flex flex-row text-white justify-between mt-4 mx-6 pb-2 border-b">
              <h5 className="text-2xl">Menu</h5>
              <button className="" onClick={toggleMenu}>
                <X />
              </button>
            </div>
            <ul className="flex flex-col text-white text-lg ms-6 mt-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="mt-3">
                  {link.name}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
