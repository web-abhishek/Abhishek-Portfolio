import SkillsCard from "./SkillsCard";
import card from '../assets/card.jpg'
import ExperienceSection from "./ExperienceSection";
const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-15">
        <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-9 flex items-center flex-col lg:flex-row">
          <div className="mb-8 lg:mb-0 flex-1">
            <h1 className="text-[#f1514d] text-4xl sm:text-5xl md:text-6xl font-extrabold">4+</h1>
            <h3 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
              Years Of Industry Experience
            </h3>
            <p className="text-gray-400 pt-4 sm:pt-5 flex-2 text-sm sm:text-base leading-6 sm:leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. amet consectetur adipisicing elit.
            Rerum, necessitatibus. amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. Rerum, necessitatibus. amet
            consectetur adipisicing elit. Rerum, necessitatibus!
          </p>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <img src={card} className="rounded-2xl sm:rounded-3xl md:rounded-4xl w-full" />
          </div>
        </div>
      </div>
      <SkillsCard />
      <ExperienceSection/>
    </div>
  );
};

export default About;
