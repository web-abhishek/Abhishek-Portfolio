import React from "react";
import reactjs from "../assets/reactjs.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
// import { TypingAnimation } from "@/registry/magicui/typing-animation"
import { TypingAnimation } from "./ui/typing-animation";

const Banner = () => {
  return (
    <div className="">

      <div className="py-20">
        <p className="text-lg font-medium text-center color-primary font-primary">Build
Digital
Futures</p>
        <h1 className="text-6xl font-bold color-primary text-center mt-10 leading-18 font-primary">Hi, I’m Abhishek Acharya <br></br>
          <TypingAnimation words={["Frontend Developer.", "React Js Developer.", "UI Developer."]} loop />
        </h1>
        <p className="mx-auto text-center mt-6 color-secondary text-base w-3xl font-secondary leading-7">
          Building Scalable Web Experiences with Clean Code & Modern UI. Frontend Developer crafting fast, responsive, and user-centric digital products.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="capitalize font-secondary color-secondary">best skills on</p>
        <div className="flex gap-5 items-center mt-5">
          <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            <img src={reactjs} className="w-8 h-8" />
          </div>
          <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            <img src={js} className="w-8 h-8" />
          </div>
          <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            <img src={redux} className="w-8 h-8" />
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
