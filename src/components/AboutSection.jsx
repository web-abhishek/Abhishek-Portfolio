import React from "react";
import rightbg from "../assets/rightbg.png"
import leftbg from "../assets/leftbg.png"

const AboutSection = () => {
  return (
    <div className="relative py-30">
      <h2 className="text-white font-bold text-4xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima
        fugit? Non temporibus similique tenetur facilis ratione atque magnam
        totam ex error dolor obcaecati ea nobis delectus exercitationem, rerum,
        adipisci quibusdam enim!
      </h2>
      <div className="absolute right-0 top-10">
        <img src={rightbg} className="" />
      </div>
      <div className="absolute left-0 top-10">
        <img src={leftbg} className="" />
      </div>
    </div>
  );
};

export default AboutSection;
