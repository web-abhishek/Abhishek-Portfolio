import { createSlice } from '@reduxjs/toolkit';

// Sample portfolio projects data
const initialProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout. Built with modern React patterns and Redux for state management.",
    shortDescription: "Modern e-commerce solution with React & Redux",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
    completedAt: "2024-06"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "A collaborative task management application featuring drag-and-drop functionality, real-time updates, and team collaboration tools. Implements complex state management patterns.",
    shortDescription: "Collaborative task manager with drag-and-drop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Frontend",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-dashboard",
    featured: true,
    completedAt: "2024-04"
  },
  {
    id: 3,
    title: "Weather Analytics App",
    description: "A weather application with advanced analytics, historical data visualization, and location-based forecasting. Features beautiful charts and responsive design.",
    shortDescription: "Weather forecasting with data visualization",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    category: "Frontend",
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-analytics",
    featured: false,
    completedAt: "2024-02"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with multi-platform integration, scheduled posting, and engagement analytics. Built for scalability.",
    shortDescription: "Multi-platform social media management tool",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "AWS"],
    category: "Full Stack",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://example-social.com",
    githubUrl: "https://github.com/username/social-dashboard",
    featured: true,
    completedAt: "2024-01"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode support, and optimized performance.",
    shortDescription: "Personal portfolio with modern design",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
    completedAt: "2023-12"
  }
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
