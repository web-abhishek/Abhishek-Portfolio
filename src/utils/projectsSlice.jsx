import { createSlice } from '@reduxjs/toolkit';
import netflixAI from "../assets/NetflixAI-ReactRedux.png";
import dripCartel from "../assets/DripCartel-ReactContext.png";
import urbanRootsJS from "../assets/UrbanRoots-Js.png";
import digitalWorxJS from "../assets/Digitalworx-Js.png";
import urbanRootsFigma from "../assets/UrbanRoots-Figma.png";
import digitalWorxFigma from "../assets/DigitalWorx-Figma.png";


const initialProjects = [
  {
    id: 1,
    title: "NetflixAI-onlineShows",
    description:
      "Built a Netflix-inspired streaming platform using React, Redux, and Tailwind CSS with OpenAI-powered smart search functionality.",
    technologies: ["React", "Redux", "Tailwind CSS", "Open API", "Firebase"],
    category: "React Js",
    thumbnail: netflixAI,
    liveUrl: "https://netflixgpt-onlineshows.web.app/",
    githubUrl: "https://github.com/web-abhishek/NetflixAI",
    featured: true,
  },
  {
    id: 2,
    title: "DripCartel-E-commerce",
    description:
      "Created a scalable e-commerce application with React.js and Context API, implementing dynamic product pages, cart functionality, and order management with Tailwind CSS styling.",
    technologies: ["React", "Context API", "Tailwind CSS"],
    category: "React Js",
    thumbnail: dripCartel,
    liveUrl: "https://dripcartel-app.netlify.app/",
    githubUrl: "https://github.com/web-abhishek/DripCartel-E-commerce",
    featured: true,
  },
  {
    id: 3,
    title: "UrbanRoots Plant Selling",
    description:
      "Built a responsive plant-based e-commerce platform featuring product listings, shopping cart functionality, and interactive UI using HTML, CSS, Bootstrap 5, and JavaScript.",
    technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS3"],
    category: "JavaScript",
    thumbnail: urbanRootsJS,
    liveUrl: "https://urbanroots-js.netlify.app/",
    githubUrl: "https://github.com/web-abhishek/UrbanRoots",
    featured: true,
  },
  {
    id: 4,
    title: "DigitalWorx-Agency Website",
    description:
      "Built a dynamic digital marketing agency website featuring service sections, contact forms, and interactive components using HTML, CSS, Bootstrap 5, and JavaScript.",
    technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS3"],
    category: "JavaScript",
    thumbnail: digitalWorxJS,
    liveUrl: "https://digitalworx-js.netlify.app/",
    githubUrl: "https://github.com/web-abhishek/Digitalworx_js",
    featured: true,
  },
  {
    id: 5,
    title: "UrbanRoots-UI/UX Design",
    description:
      "Created a plant-based e-commerce UI/UX design in Figma, including core user journeys, high-fidelity screens, and clickable prototypes.",
    technologies: ["Figma", "Photoshop"],
    category: "Figma",
    thumbnail: urbanRootsFigma,
    liveUrl:
      "https://www.figma.com/proto/xTmKXSjSfEqpyJxG17aewa/urbanroots?node-id=2-2&t=sj449ZKq3ki0xRPr-1",
    featured: false,
  },
  {
    id: 6,
    title: "DigitalWorx-UI/UX Design",
    description:
      "Created a digital marketing agency UI/UX design in Figma, including core user journeys, high-fidelity screens, and clickable prototypes.",
    technologies: ["Figma", "Photoshop"],
    category: "Figma",
    thumbnail: digitalWorxFigma,
    liveUrl:
      "https://www.figma.com/proto/H7GYxiobjGTbNfMy2jjL7g/DigitalWorx?node-id=8-18&t=nGdRtUDVP03BQMTO-1&starting-point-node-id=313%3A959",
    featured: false,
  },
];

// Get unique technologies from all projects
const getAllTechnologies = (projects) => {
  const techSet = new Set();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

// Get unique categories from all projects
const getAllCategories = (projects) => {
  const categorySet = new Set();
  projects.forEach(project => categorySet.add(project.category));
  return Array.from(categorySet).sort();
};

const initialState = {
  projects: initialProjects,
  filteredProjects: initialProjects,
  selectedProject: null,
  filters: {
    technology: null,
    category: null,
    searchQuery: ''
  },
  availableTechnologies: getAllTechnologies(initialProjects),
  availableCategories: getAllCategories(initialProjects),
  isLoading: false,
  error: null
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // Set active technology filter
    setTechnologyFilter: (state, action) => {
      state.filters.technology = action.payload;
      state.filteredProjects = filterProjects(state.projects, state.filters);
    },
    
    // Set active category filter
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      state.filteredProjects = filterProjects(state.projects, state.filters);
    },
    
    // Set search query
    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
      state.filteredProjects = filterProjects(state.projects, state.filters);
    },
    
    // Clear all filters
    clearFilters: (state) => {
      state.filters = { technology: null, category: null, searchQuery: '' };
      state.filteredProjects = state.projects;
    },
    
    // Select a project for details view
    selectProject: (state, action) => {
      const projectId = action.payload;
      state.selectedProject = state.projects.find(p => p.id === projectId) || null;
    },
    
    // Clear selected project
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
    
    // Set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    // Set error state
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

// Helper function to filter projects based on active filters
const filterProjects = (projects, filters) => {
  let result = [...projects];
  
  if (filters.technology) {
    result = result.filter(project => 
      project.technologies.includes(filters.technology)
    );
  }
  
  if (filters.category) {
    result = result.filter(project => 
      project.category === filters.category
    );  
  }
  
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    result = result.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    );
  }
  
  return result;
};

export const {
  setTechnologyFilter,
  setCategoryFilter,
  setSearchQuery,
  clearFilters,
  selectProject,
  clearSelectedProject,
  setLoading,
  setError
} = projectsSlice.actions;

export default projectsSlice.reducer;
