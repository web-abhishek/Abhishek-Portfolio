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

      <div className="py-10 sm:py-16 md:py-20">
        <p className="text-sm sm:text-base md:text-lg font-medium text-center color-primary font-primary">Build Digital Futures</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold color-primary text-center mt-6 sm:mt-8 md:mt-10 leading-tight sm:leading-snug lg:leading-18 font-primary">Hi, I'm Abhishek Acharya <br></br>
          <TypingAnimation words={["Frontend Developer.", "React Js Developer.", "UI Developer."]} loop />
        </h1>
        <p className="mx-auto text-center mt-4 sm:mt-6 color-secondary text-xs sm:text-sm md:text-base w-full px-2 sm:w-11/12 md:w-3/4 lg:w-2/3 font-secondary leading-6 sm:leading-7 text-wrap">
          Building Scalable Web Experiences with Clean Code & Modern UI. Frontend Developer crafting fast, responsive, and user-centric digital products.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-8 sm:gap-6 md:gap-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center sm:items-start mt-8 sm:mt-10">
          <p className="capitalize font-secondary color-secondary text-sm sm:text-base">best skills on</p>
          <div className="flex gap-3 sm:gap-4 md:gap-5 items-center mt-4 sm:mt-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={reactjs} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={js} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
              <img src={redux} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
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



      {/* <div>
        <img src={banner} />
      </div> */}
    </div>
  );
};

export default Banner;
