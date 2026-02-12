import BannerSection from "./BannerSection";
import ExperienceSection from "./ExperienceSection";
import SkillsCard from "./SkillsCard";
import MarqueeMain from "./MarqueeMain";
import ProjectsMain from "./ProjectsMain";
import Contact from "./Contacts";

const Home = () =>{
    return(
        <div>
            <BannerSection />
            <MarqueeMain />
            <ProjectsMain />
            <SkillsCard />
            <ExperienceSection />
            <Contact/>
        </div>
    )
}

export default Home;