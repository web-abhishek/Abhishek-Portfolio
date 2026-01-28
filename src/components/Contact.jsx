import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 h-130 w-107.5 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-50 w-50 rounded-full bg-linear-to-b from-[#f1514d] to-[#c0383a] -left-50 -top-30"></div>

        <div className="absolute h-50 w-50 rounded-full bg-linear-to-r from-[#f1514d] to-[#c0383a] -right-50 -bottom-20"></div>
      </div>

      <div
        className="z-50 relative flex gap-8 w-2xl mx-auto mt-20 mb-20 items-start justify-around flex-col bg-[#FFFFFF12] backdrop-blur-[10px]
  border-2 border-[#FFFFFF1A] shadow-[0_0_40px_rgba(8,7,16,0.6)] rounded-3xl text-white text-center overflow-hidden p-20"
      >
        <div className="flex items-center gap-3.5 cursor-pointer">
          <div className="bg-gray-800 p-3 rounded-full">
            <FaLinkedinIn className="font-bold text-3xl text-red-400" />
          </div>
          <a
            href="https://www.linkedin.com/in/web-abhiacharya/"
            className="font-normal text-xl text-gray-300"
          >
            LinkedIn: web-abhiacharya
          </a>
        </div>

        <div className="flex items-center gap-3.5 cursor-pointer">
          <div className="bg-gray-800 p-3 rounded-full">
            <FaGithub className="font-bold text-3xl text-red-400" />
          </div>
          <a
            href="https://github.com/web-abhishek"
            className="font-normal text-xl text-gray-300"
          >
            Github: web-abhishek
          </a>
        </div>
        <div className="flex items-center gap-3.5 cursor-pointer">
          <div className="bg-gray-800 p-3 rounded-full">
            <MdEmail className="font-bold text-3xl text-red-400" />
          </div>
          <a
            href="mailto:web.abhiacharya@gmail.com"
            className="font-normal text-xl text-gray-300"
          >
            Mail Me: web.abhiacharya@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3.5 cursor-pointer">
          <div className="bg-gray-800 p-3 rounded-full">
            <IoMdCall className="font-bold text-3xl text-red-400" />
          </div>
          <a
            href="tel:+919570258922"
            className="font-normal text-xl text-gray-300"
          >
            Call Me: (+91) 9570258922
          </a>
        </div>
        <div className="flex items-center gap-3.5 cursor-pointer">
          <div className="bg-gray-800 p-3 rounded-full">
            <FaLocationDot className="font-bold text-3xl text-red-400" />
          </div>
          <p className="font-medium text-xl text-gray-300">
            Kolkata - 700081, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
