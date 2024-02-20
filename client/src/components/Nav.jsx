import React, { useState } from "react";
import { GiMineralHeart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";
import cv from "../cv/Plata_Resume.pdf";

const Nav = () => {
  const Links = [
    { name: "Home", link: "intro" },
    { name: "About", link: "about" },
    { name: "Certificates", link: "certificates" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white dark:bg-customFrblack transition-all duration-500 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
                text-black dark:text-white"
        >
          <span className="text-2xl text-customBlue dark:text-customViolet mr-1">
            <GiMineralHeart />
          </span>
          Plata.
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden text-black dark:text-white"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-white dark:bg-customFrblack lg:bg-transparent lg:dark:bg-transparent
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 lg:transition-none lg:duration-0
                ease-in ${
                  open
                    ? "top-12 opacity-100"
                    : "top-[-490px] md:opacity-100 opacity-0"
                }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 font-Poppins"
            >
              <Link
                to={link.link}
                key={link.name}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                className="text-black dark:text-white hover:text-customBlue"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <a href={cv} download>
            <button
              className="bg-customBlue dark:bg-customViolet text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-customlightBlue dark:hover:bg-customlightViolet
                        duration-500"
            >
              Download CV
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
