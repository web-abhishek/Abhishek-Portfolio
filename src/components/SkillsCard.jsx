import React from "react";

import reactjs from "../assets/reactjs.png";
import js from "../assets/js.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import redux from "../assets/redux.png";
import contextapi from "../assets/contextapi.png";
import graphQL from "../assets/graphQL.png";
import rest from "../assets/rest.png";
import jest from "../assets/jest.png";
import test from "../assets/test.png";
import figma from "../assets/figma.png";

const iconBox =
  "w-15 h-15 cursor-pointer flex justify-center items-center rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]";

const SkillsCard = () => {
  return (
    <div className=" my-40 grid grid-cols-3 gap-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">Technical Skills</h1>
        <p className="color-secondary text-base tracking-wide leading-7">
          I build scalable and high-performance web applications using React.js,
          JavaScript (ES6+), and TypeScript. Skilled in Redux Toolkit, API integration,
          performance optimization, and modern responsive UI development with Tailwind CSS.
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-2xl font-medium mb-4">
          Frontend Engineering
        </h1>

        <span className="color-secondary text-md leading-7 tracking-wide">
          React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS, Tailwind
          CSS, Bootstrap 5
        </span>

        <div className="flex gap-5 flex-wrap items-center my-10">
          {[reactjs, js, typescript, html, css].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-2xl font-medium mb-4">
          Scalable State Management
        </h1>

        <span className="color-secondary text-md leading-7 tracking-wide">
          Redux Toolkit, Context API
        </span>

        <div className="flex gap-5 flex-wrap items-center my-10">
          {[redux, contextapi].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-2xl font-medium mb-4">
          Application Optimization
        </h1>

        <span className="color-secondary text-md leading-7 tracking-wide">
          Code Splitting, Lazy Loading, Memoization
        </span>

        <div className="flex gap-5 flex-wrap items-center my-10">
          {[reactjs, js].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-2xl font-medium mb-4">
          Application Testing
        </h1>

        <span className="color-secondary text-md leading-7 tracking-wide">
          Jest, React Testing Library
        </span>

        <div className="flex gap-5 flex-wrap items-center my-10">
          {[jest, test].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

      </div>
      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-2xl font-medium mb-4">
          Other Tools & API Integration
        </h1>

        <span className="color-secondary text-md leading-7 tracking-wide">
          GitHub, Figma, REST APIs, GraphQL
        </span>

        <div className="flex gap-5 flex-wrap items-center my-10">
          {[figma, rest, graphQL].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
