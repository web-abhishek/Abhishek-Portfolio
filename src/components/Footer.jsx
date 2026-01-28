import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
      <div className='flex justify-between items-center pt-5 pb-2  border-t border-t-gray-900'>
        <p className='text-gray-400 font-normal text-sm'>Get Ready To
Create Great With Abhishek Acharya.</p>
    
    <div className="flex justify-end items-center gap-3">
              {[FaLinkedinIn, FaGithub, IoCall, IoMdMail].map(
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
  )
}

export default Footer
