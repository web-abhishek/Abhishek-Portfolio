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
        <>
            <section className="py-16 md:py-24 hero-gradient">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 animate-fade-in text-gray-300">
                        All Projects
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                        A collection of projects I've worked on, from full-stack applications to
                        beautiful frontend interfaces. Each project represents my commitment to quality.
                    </p>
                </div>
            </section>

            <section className="py-8">
                <div className="container-custom">
                   
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="text-sm text-muted-foreground mr-2">Category:</span>
                            <button
                                onClick={() => dispatch(setCategoryFilter(null))}
                                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${!filters.category
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                All
                            </button>
                            {availableCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => dispatch(setCategoryFilter(category))}
                                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${filters.category === category
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="hidden sm:block w-px h-6 bg-border" />

                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="text-sm text-muted-foreground mr-2">Tech:</span>
                            <button
                                onClick={() => dispatch(setTechnologyFilter(null))}
                                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${!filters.technology
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                All
                            </button>
                            {availableTechnologies.slice(0, 5).map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => dispatch(setTechnologyFilter(tech))}
                                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${filters.technology === tech
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>

                    {hasActiveFilters && (
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <span className="text-sm text-muted-foreground">Active filters:</span>
                            {filters.category && (
                                <Badge variant="default">
                                    {filters.category}
                                    <button
                                        onClick={() => dispatch(setCategoryFilter(null))}
                                        className="ml-1 hover:text-destructive"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            )}
                            {filters.technology && (
                                <Badge variant="default">
                                    {filters.technology}
                                    <button
                                        onClick={() => dispatch(setTechnologyFilter(null))}
                                        className="ml-1 hover:text-destructive"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            )}
                            {filters.searchQuery && (
                                <Badge variant="default">
                                    "{filters.searchQuery}"
                                    <button
                                        onClick={() => dispatch(setSearchQuery(''))}
                                        className="ml-1 hover:text-destructive"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            )}
                            <button
                                onClick={() => dispatch(clearFilters())}
                                className="text-sm text-destructive hover:underline ml-2"
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    {filteredProjects.length > 0 ? (
                        <>
                            <p className="text-muted-foreground mb-8">
                                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="text-center py-20">
                            
                            <button
                                onClick={() => dispatch(clearFilters())}
                                className="px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Projects;
