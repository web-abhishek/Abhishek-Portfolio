import React from "react";
import banner from "../assets/banner-01.png";
import reactjs from "../assets/reactjs.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
import Ctelephone from "../assets/Ctelephone.png";
import Cmail from "../assets/Cmail.png";
import Clinkedin from "../assets/Clinkedin.png";

const Banner = () => {
  return (
    <div className="flex items-center">
      <div>
        <div>
          <span className="text-2xl">Welcome Here!</span>
          <h1 className="text-5xl font-bold text-white">Hi, I’m Jone Lee a <br></br>Developer.Professional Coder.Developer.</h1>
          <p>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-start">
            <p className="uppercase">find with me</p>
            <div className="flex gap-5 items-center mt-5">
              <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
                <img src={Ctelephone} className="w-8 h-8" />
              </div>
              <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
                <img src={Cmail} className="w-8 h-8" />
              </div>
              <div className="w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
                <img src={Clinkedin} className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="uppercase">best skill on</p>
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
        </div>
      </div>
      <div>
        <img src={banner} />
      </div>
    </div>
  );
};

export default Banner;
