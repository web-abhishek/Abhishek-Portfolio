import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils/ProjectData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = ({ limit, showViewMore = false }) => {
  const visibleProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13">
        {visibleProjects?.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {/* {showViewMore && (
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 rounded-xl border border-white/20
                       hover:bg-white/10 transition"
          >
            View More Projects →
          </Link>
        </div>
      )} */}

      {showViewMore && (
        <motion.div
          className="mt-14 text-center"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link
            to="/projects"
            className="inline-block text-gray-400 px-8 py-3 rounded-xl
               border border-white/20 hover:bg-white/10"
          >
            View More →
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
