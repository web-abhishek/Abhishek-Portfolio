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
  "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 cursor-pointer flex justify-center items-center rounded-lg sm:rounded-xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]";

const SkillsCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="my-20 sm:my-28 md:my-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary pt-8">Technical Skills</h1>
        <p className="color-secondary text-sm sm:text-base tracking-wide leading-6 sm:leading-7 pl-3 pt-3">
          I build scalable and high-performance web applications using React.js,
          JavaScript (ES6+), and TypeScript. Skilled in Redux Toolkit, API integration,
          performance optimization, and modern responsive UI development with Tailwind CSS.
          </p>
          <div className="pl-3 mt-4 sm:mt-6">
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

      <div className="px-5 sm:px-7 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Frontend Development
        </h1>

        <span className="color-secondary text-sm sm:text-base leading-6 sm:leading-7 tracking-wide">
          React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS, Tailwind
          CSS, Bootstrap 5
        </span>

        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap items-center mt-7 sm:mt-8 md:mt-10">
          {[reactjs, js, typescript, html, css].map((icon, i) => {
            const label = icon === reactjs ? 'React' : icon === js ? 'JavaScript' : icon === typescript ? 'TypeScript' : icon === html ? 'HTML5' : 'CSS3';
            return (
              <div key={i} className="relative group">
                <div className={iconBox}>
                  <img src={icon} alt={label} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 sm:px-7 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Scalable State Management
        </h1>

        <span className="color-secondary text-sm sm:text-base leading-6 sm:leading-7 tracking-wide">
          Redux Toolkit, Context API
        </span>

        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap items-center mt-7 sm:mt-8 md:mt-10">
          {[redux, contextapi].map((icon, i) => {
            const label = icon === redux ? 'Redux' : 'Context API';
            return (
              <div key={i} className="relative group">
                <div className={iconBox}>
                  <img src={icon} alt={label} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 sm:px-7 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Application Optimization
        </h1>

        <span className="color-secondary text-sm sm:text-base leading-6 sm:leading-7 tracking-wide">
          Code Splitting, Lazy Loading, Memoization
        </span>

        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap items-center mt-7 sm:mt-8 md:mt-10">
          {[reactjs, js].map((icon, i) => {
            const label = icon === reactjs ? 'React' : 'JavaScript';
            return (
              <div key={i} className="relative group">
                <div className={iconBox}>
                  <img src={icon} alt={label} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-5 sm:px-7 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Application Testing
        </h1>

        <span className="color-secondary text-sm sm:text-base leading-6 sm:leading-7 tracking-wide">
          Jest, React Testing Library
        </span>

        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap items-center mt-7 sm:mt-8 md:mt-10">
          {[jest, test].map((icon, i) => {
            const label = icon === jest ? 'Jest' : 'React Testing Library';
            return (
              <div key={i} className="relative group">
                <div className={iconBox}>
                  <img src={icon} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>
              </div>
            );
          })}
        </div>

      </div>
      <div className="px-5 sm:px-7 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Other Tools & API Integration
        </h1>

        <span className="color-secondary text-sm sm:text-base leading-6 sm:leading-7 tracking-wide">
          GitHub, Figma, REST APIs, GraphQL
        </span>

        <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap items-center mt-7 sm:mt-8 md:mt-10">
          {[figma, rest, graphQL].map((icon, i) => {
            const label = icon === figma ? 'Figma' : icon === rest ? 'REST APIs' : 'GraphQL';
            return (
              <div key={i} className="relative group">
                <div className={iconBox}>
                  <img src={icon} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SkillsCard;
