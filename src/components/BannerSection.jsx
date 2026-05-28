import React from "react";
import reactjs from "../assets/reactjs.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
import { TypingAnimation } from "./ui/typing-animation";
import SocialLink from './SocialLink';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Banner = () => {

  const socialLinks = [
    { href: 'https://github.com/web-abhishek', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/web-abhiacharya/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/johndoe', icon: Twitter, label: 'Twitter' }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-0">

      <div className="py-8 sm:py-14 md:py-18">
        <p className="text-sm sm:text-base md:text-lg font-medium text-center color-primary font-primary">Build Digital Futures</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold color-primary text-center mt-6 sm:mt-8 md:mt-10 leading-tight sm:leading-snug lg:leading-18 font-primary">Hi, I'm Abhishek Acharya <br></br>
          <TypingAnimation words={["Frontend Developer.", "React Js Developer.", "UI Developer."]} loop />
        </h1>
        <p className="mx-auto text-center mt-4 sm:mt-6 color-secondary text-xs sm:text-sm md:text-base w-full px-2 sm:w-11/12 md:w-3/4 lg:w-2/3 font-secondary leading-6 sm:leading-7 text-wrap">
          Building Scalable Web Experiences with Clean Code & Modern UI. Frontend Developer crafting fast, responsive, and user-centric digital products.
        </p>
         <div className="mt-4 sm:mt-6 text-center">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#f2574f] text-white text-sm sm:text-base hover:opacity-90 transition"
            >
              Contact Me
            </button>
          </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-8 sm:gap-6 md:gap-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center sm:items-start mt-8 sm:mt-10">
          <p className="capitalize font-secondary color-secondary text-sm sm:text-base">best skills on</p>
          <div className="flex gap-3 sm:gap-4 md:gap-5 items-center mt-4 sm:mt-5">
            <div className="relative group w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={reactjs} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="React" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">React</span>
            </div>

            <div className="relative group w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={js} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="JavaScript" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">JavaScript</span>
            </div>

            <div className="relative group w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={redux} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Redux" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Redux</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start mt-6 sm:mt-10">
          <p className="capitalize font-secondary color-secondary text-sm sm:text-base">connect with me</p>
          <div className="flex justify-center gap-3 mt-4 sm:mt-5">
            {socialLinks.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
