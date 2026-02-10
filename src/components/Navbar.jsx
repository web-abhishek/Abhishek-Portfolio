import React from "react";
import logo from "../assets/logo.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Menu, X, Download } from 'lucide-react';

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
      <div className="flex items-center gap-3">
        <a
                href="/resume.pdf"
                download
                className="mt-2 mx-4 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium gradient-primary text-primary-foreground rounded-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
