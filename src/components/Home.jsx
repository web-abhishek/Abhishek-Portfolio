import BannerSection from "./BannerSection";
import ExperienceSection from "./ExperienceSection";
import SkillsCard from "./SkillsCard";
import MarqueeMain from "./MarqueeMain";
import ProjectsMain from "./ProjectsMain";

const Home = () =>{
    return(
        <div>
            <BannerSection />
            <MarqueeMain />
            <ProjectsMain />
            <SkillsCard />
            <ExperienceSection />
        </div>
    )
}

export default Home;