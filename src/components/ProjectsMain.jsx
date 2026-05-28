import React from 'react';
import { X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from './ProjectCard';
import Badge from './Badge';

import {
    setTechnologyFilter,
    setCategoryFilter,
    setSearchQuery,
    clearFilters
} from '../utils/projectsSlice';

const Projects = () => {
    const dispatch = useDispatch();

    const {
        filteredProjects,
        filters,
        availableTechnologies,
        availableCategories
    } = useSelector((state) => state.projects);

    const hasActiveFilters = filters.technology || filters.category || filters.searchQuery;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <section className="py-3 hero-gradient">
                <div className="container-custom text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">
                        Featured Projects
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-secondary max-w-3xl mx-auto animate-fade-in animation-delay-100 color-secondary">
                        A collection of projects I've worked on, from design applications to
                        beautiful frontend interfaces. Real-World Applications, Practical Solutions and Clean Architecture.
                    </p>
                </div>
            </section>

            <section className="py-6 sm:py-8">
                <div className="container-custom">
                   
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                      
                        <div className="flex flex-wrap justify-center gap-2 items-center">
                            <span className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Category:</span>
                            <button
                                onClick={() => dispatch(setCategoryFilter(null))}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-colors ${!filters.category
                                        ? 'bg-reddish text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                All
                            </button>
                            {availableCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => dispatch(setCategoryFilter(category))}
                                    className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-colors ${filters.category === category
                                            ? 'bg-reddish text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="hidden sm:block w-px h-6 bg-border" />

                        <div className="flex flex-wrap justify-center gap-2 items-center">
                            <span className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Tech:</span>
                            <button
                                onClick={() => dispatch(setTechnologyFilter(null))}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-colors ${!filters.technology
                                        ? 'bg-reddish text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                All
                            </button>
                            {availableTechnologies.slice(0, 5).map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => dispatch(setTechnologyFilter(tech))}
                                    className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-colors ${filters.technology === tech
                                            ? 'bg-reddish text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    {filteredProjects.length > 0 ? (
                        <>
                            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                                { filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12 sm:py-16 md:py-20">
                            
                            <button
                                onClick={() => dispatch(clearFilters())}
                                className="px-4 sm:px-6 py-2 sm:py-3 gradient-primary text-primary-foreground rounded-lg font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
