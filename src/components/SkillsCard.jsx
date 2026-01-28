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
    <div className="py-30 grid grid-cols-3 gap-10">
      <div>
        <h1 className="text-[#f1514d] text-6xl font-bold mb-5">Skills On</h1>
        <p className="text-gray-300 text-base tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
          consectetur adipisicing elit. amet consectetur adipisicing elit.
          Rerum, necessitatibus. amet consectetur adipisicing elit. amet
          consectetur adipisicing elit. Rerum, necessitatibus! Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. Obcaecati numquam minus cum?
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="text-gray-200 text-2xl font-medium pb-3">
          Frontend Development
        </h1>

        <span className="text-gray-300 text-md leading-8 tracking-wide">
          React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS, Tailwind
          CSS, Bootstrap 5
        </span>

        <div className="flex gap-5 items-center mt-5">
          {[reactjs, js, typescript, html, css].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          Building scalable, responsive, and component-driven user interfaces
          with modern frontend technologies.
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="text-white text-2xl font-medium pb-3">
          State Management
        </h1>

        <span className="text-gray-400 text-md">
          Redux Toolkit, Context API
        </span>

        <div className="flex gap-5 items-center mt-5">
          {[redux, contextapi].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          Managing complex application state efficiently with predictable data
          flow and scalable architecture.
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="text-white text-2xl font-medium pb-3">
          Performance & Optimization
        </h1>

        <span className="text-gray-400 text-md">
          Code Splitting, Lazy Loading, Memoization
        </span>

        <div className="flex gap-5 items-center mt-5">
          {[reactjs, js].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          Optimizing React apps for faster load time, smaller bundles, and
          smoother UX.
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="text-white text-2xl font-medium pb-3">Testing</h1>

        <span className="text-gray-400 text-md">
          Jest, React Testing Library
        </span>

        <div className="flex gap-5 items-center mt-5">
          {[jest, test].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          Writing unit and component tests to ensure reliability and
          maintainability.
        </p>
      </div>

      <div className="px-10 py-12 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="text-white text-2xl font-medium pb-3">
          Tools & Integrations
        </h1>

        <span className="text-gray-400 text-md">
          GitHub, Figma, REST APIs, GraphQL
        </span>

        <div className="flex gap-5 items-center mt-5">
          {[figma, rest, graphQL].map((icon, i) => (
            <div key={i} className={iconBox}>
              <img src={icon} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          Collaborating via GitHub, converting Figma designs into UI, and
          integrating APIs for dynamic data.
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
