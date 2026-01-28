import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";

import ExperienceSection from "./ExperienceSection";
import SkillsCard from "./SkillsCard";
import Projects from "./Projects";

const Home = () =>{
    return(
        <div>
            <BannerSection/>
            <AboutSection/>
            <Projects limit={3} showViewMore/>
            <SkillsCard/>
            <ExperienceSection/>
        </div>
    )
}

export default Home;