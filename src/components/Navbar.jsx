import React from "react";
import logo from "../assets/logo.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Menu, X, Download } from 'lucide-react';
import { AuroraText } from "./ui/aurora-text";
import { BorderBeam } from "./ui/border-beam";

const Navbar = () => {
  const navClass = ({ isActive }) => `px-3 py-2 text-sm font-medium
   ${isActive
      ? "text-[#f1514d] border-b-2 border-[#f1514d]"
      : "text-gray-300 hover:text-[#f1514d]"
    }`;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-6 md:gap-10 border-b border-gray-800 
      py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm">
        <a href="tel:+919570258922" className="text-gray-300 font-medium flex items-center text-xs sm:text-sm font-secondary whitespace-nowrap">
          <IoCall className="mr-1 sm:mr-2 text-xs" />
          <span className="hidden sm:inline">(+91) 9570258922</span>
          <span className="sm:hidden">+91 9570258922</span>
        </a>
        <hr className="border-l border-gray-300 h-4 sm:h-5 mx-2" />

        <a href="mailto:web.abhiacharya@gmail.com" className="text-gray-300 font-medium flex items-center text-xs sm:text-sm font-secondary whitespace-nowrap overflow-hidden text-ellipsis max-w-xs sm:max-w-none">
          <IoMdMail className="mr-1 sm:mr-2 text-xs flex-shrink-0" />
          <span className="hidden md:inline">web.abhiacharya@gmail.com</span>
          <span className="md:hidden">web.abhiacharya@gmail.com</span>
        </a>
      </div>

      <div className="flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4">
        <img alt="logo" src={logo} className="w-24 sm:w-28 md:w-34" />

        <a
          href="/resume.pdf"
          download
          className="
    relative overflow-hidden
    inline-flex items-center gap-2
    px-4 py-3 text-sm font-medium
    rounded-lg
    bg-[linear-gradient(145deg,#1e2024,#23272b)]
    hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)]
    transition-all duration-300
    shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]
  "
        >
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-blue-500 to-transparent"
             borderWidth={2}
          />

          <BorderBeam
            duration={6}  
            delay={3}
            size={400}
            borderWidth={2}
            className="from-transparent via-[#f2574f] to-transparent"
          />

          <Download className="w-4 h-4 z-10 text-white" />
          <span className="z-10">
            <AuroraText>Download Resume</AuroraText>
          </span>
        </a>
      </div>
    </div>

  );
};

export default Navbar;
