import React from "react";
import logo from "../assets/logo.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Menu, X, Download } from 'lucide-react';
import { AuroraText } from "./ui/aurora-text";

const Navbar = () => {
  const navClass = ({ isActive }) => `px-3 py-2 text-sm font-medium
   ${isActive
      ? "text-[#f1514d] border-b-2 border-[#f1514d]"
      : "text-gray-300 hover:text-[#f1514d]"
    }`;

  return (
    <div>
  <div className="flex items-center justify-between border-b border-gray-800 py-3 px-4">
    <a href="tel:+919570258922" className="text-gray-300 font-medium flex items-center text-sm font-secondary">
      <IoCall className="mr-2 text-sm" />(+91) 9570258922
    </a>

    <a href="mailto:web.abhiacharya@gmail.com" className="text-gray-300 font-medium flex items-center text-sm font-secondary">
      <IoMdMail className="mr-2 text-sm" />web.abhiacharya@gmail.com
    </a>
  </div>

  <div className="flex justify-between items-center py-3 px-4">
    <img alt="logo" src={logo} className="w-34" />

    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium gradient-primary text-primary-foreground rounded-lg bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]"
    >
     <Download className="w-4 h-4" /> <AuroraText>Download Resume</AuroraText>
    </a>
  </div>
</div>

  );
};

export default Navbar;
