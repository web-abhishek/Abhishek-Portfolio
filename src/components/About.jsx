import SkillsCard from "./SkillsCard";
import card from '../assets/card.jpg'
import ExperienceSection from "./ExperienceSection";
const About = () => {
  return (
    <div>
      <div className="flex items-center gap-15">
        <div className="py-20 px-9 flex items-center">
          <div className="mb-5 flex-1">
            <h1 className="text-[#f1514d] text-6xl font-extrabold">4+</h1>
            <h3 className="text-gray-300 text-4xl font-bold">
              Years Of Industry Experience
            </h3>
            <p className="text-gray-400 pt-5 flex-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. amet consectetur adipisicing elit.
            Rerum, necessitatibus. amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. Rerum, necessitatibus. amet
            consectetur adipisicing elit. Rerum, necessitatibus!
          </p>
          </div>
          <div className="flex-1">
            <img src={card} className="rounded-4xl" />
          </div>
        </div>
      </div>
      <SkillsCard />
      <ExperienceSection/>
    </div>
  );
};

export default About;
