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
        <p className="text-2xl font-medium text-center color-primary font-primary">Build
Digital
Futures</p>
        <h1 className="text-6xl font-bold color-primary text-center mt-10 leading-18 font-primary">Hi, I’m Abhishek Acharya <br></br>
          <TypingAnimation words={["Frontend Developer", "React Js Developer", "UI Developer"]} loop />
        </h1>
        <p className="mx-auto text-center mt-6 text-gray-400 text-lg w-3xl font-secondary">
          I use animation as a third dimension by which to simplify
          experiences and kuiding thro each and every interaction. I’m not
          adding motion just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="uppercase font-secondary color-secondary">best skill on</p>
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
