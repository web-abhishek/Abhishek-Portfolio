import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  // console.log(project);

  if (!project) return null;
  const { 
    id, 
    title, 
    description, 
    technologies, 
    thumbnail,  
    liveUrl, 
    githubUrl,
    category,
    featured 
  } = project;
  
  return (
      <div className="p-10 h-full rounded-3xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
        <div className="rounded-2xl">
          <img src={thumbnail} alt={title} className="rounded-4xl" />
        </div>
        <div className="p-5">
          <h2 className="font-bold mb-3 text-3xl text-white font-primary">
            <a href="">{title}</a>
          </h2>
          <p className="font-normal text-md text-gray-400 block mt-6">
            {description}
          </p>
          <p className="font-normal text-md text-gray-400 block mb-3">
            Tech Stack Used:
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            {technologies?.map((item, i)=>
            <span key={i} className="rounded px-3 py-2 bg-gray-800 color-primary text-sm font-normal border border-gray-700">
              {item}
            </span>
          )}
          </div>
          {/* <a href={liveUrl} className="font-normal text-md text-gray-400 block mt-6">
            Live Demo: {liveUrl}
          </a>
          <a href={githubUrl} className="font-normal text-md text-gray-400 block mt-3">
            View Code: {githubUrl}
          </a> */}
        
        <div className="mt-6 flex flex-wrap gap-4">
  {liveUrl && (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center px-6 py-3 rounded-lg 
                 bg-[#f2574f] text-white font-medium 
                 hover:opacity-90 transition-all duration-300 flex items-center gap-3"
    >
      Live Demo <ExternalLink/>
    </a>
  )}

  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center px-6 py-3 rounded-lg 
                 border border-[#f2574f] text-[#f2574f] font-medium 
                 hover:bg-[#f2574f] hover:text-white 
                 transition-all duration-300 flex items-center gap-3"
    >
      View Code <ExternalLink />
    </a>
  )}
</div>
        </div>
      </div>
  );
};

export default ProjectCard;
