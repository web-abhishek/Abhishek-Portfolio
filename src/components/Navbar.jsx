import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navClass = ({ isActive }) => `px-3 py-2 text-sm font-medium
   ${
     isActive
       ? "text-[#f1514d] border-b-2 border-[#f1514d]"
       : "text-gray-300 hover:text-[#f1514d]"
   }`;

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-800 py-2">
        <a href="tel:+919570258922" className="text-gray-300 font-medium flex items-center text-sm"><IoCall className="mr-2 text-sm"/>(+91) 9570258922</a>
        <a href="mailto:web.abhiacharya@gmail.com" className="text-gray-300 font-medium flex items-center text-sm"><IoMdMail className="mr-2 text-sm"/>web.abhiacharya@gmail.com</a>
      </div>
      <div className="flex justify-between items-center py-2">
      <div>
        <img alt="logo" src={logo} className="w-34" />
      </div>
      <div>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        {[FaLinkedinIn, FaGithub, GiHamburgerMenu].map(
          (Icon, i) => (
            <div
              key={i}
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition cursor-pointer"
            >
              <Icon className="text-lg text-white group-hover:text-white transition" />
            </div>
          )
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
