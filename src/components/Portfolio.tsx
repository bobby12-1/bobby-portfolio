import React, { useState } from 'react';
import { 
  ShoppingCart, 
  CheckSquare, 
  Cloud, 
  Briefcase, 
  Dumbbell, 
  MessageCircle,
  Utensils,
  BarChart3,
  ExternalLink,
  Github,
  Eye
} from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  icon: React.ReactNode;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      fullDescription: "A full-stack e-commerce platform featuring user authentication, product management, shopping cart, and payment integration. Built with React, TypeScript, Node.js, and MongoDB.",
      category: "Web App",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      icon: <ShoppingCart size={32} />,
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/joegreyson/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      fullDescription: "A real-time task management application with team collaboration features, drag-and-drop functionality, and progress tracking. Features include real-time updates, file attachments, and team permissions.",
      category: "Web App",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      icon: <CheckSquare size={32} />,
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/joegreyson/task-manager",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasting",
      fullDescription: "A responsive weather dashboard that displays current conditions, 7-day forecasts, and weather maps. Integrates with multiple weather APIs and features location-based services.",
      category: "Web App",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
      icon: <Cloud size={32} />,
      liveUrl: "https://weather-dash-demo.com",
      githubUrl: "https://github.com/joegreyson/weather-dashboard",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with dark theme",
      fullDescription: "A responsive portfolio website featuring dark mode, smooth animations, and optimized performance. Built with modern web technologies and best practices for SEO and accessibility.",
      category: "Website",
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      icon: <Briefcase size={32} />,
      liveUrl: "https://joegreyson.com",
      githubUrl: "https://github.com/joegreyson/portfolio",
      featured: true
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application",
      fullDescription: "A progressive web app for tracking workouts, nutrition, and fitness goals. Features include workout plans, progress charts, and social sharing capabilities.",
      category: "Mobile App",
      technologies: ["React Native", "Redux", "Chart.js", "PWA"],
      icon: <Dumbbell size={32} />,
      liveUrl: "https://fitness-tracker-demo.com",
      githubUrl: "https://github.com/joegreyson/fitness-tracker",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging platform",
      fullDescription: "A real-time chat application with multiple rooms, file sharing, and emoji reactions. Features end-to-end encryption and push notifications.",
      category: "Web App",
      technologies: ["Socket.io", "React", "Node.js", "PostgreSQL"],
      icon: <MessageCircle size={32} />,
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/joegreyson/chat-app",
      featured: false
    },
    {
      id: 7,
      title: "Restaurant Booking",
      description: "Online reservation system for restaurants",
      fullDescription: "A comprehensive booking system for restaurants with table management, customer profiles, and SMS notifications. Includes admin dashboard for restaurant management.",
      category: "Web App",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
      icon: <Utensils size={32} />,
      liveUrl: "https://restaurant-booking-demo.com",
      githubUrl: "https://github.com/joegreyson/restaurant-booking",
      featured: true
    },
    {
      id: 8,
      title: "Data Visualization",
      description: "Interactive data visualization dashboard",
      fullDescription: "An interactive dashboard for data visualization with multiple chart types, filtering options, and real-time data updates. Perfect for business intelligence and analytics.",
      category: "Dashboard",
      technologies: ["D3.js", "React", "Python", "FastAPI"],
      icon: <BarChart3 size={32} />,
      liveUrl: "https://data-viz-demo.com",
      githubUrl: "https://github.com/joegreyson/data-viz-dashboard",
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="project-icon-large">
            {project.icon}
          </div>
          <div className="modal-title-section">
            <span className="project-category">{project.category}</span>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="project-details">
            <div className="detail-section">
              <h4>Project Overview</h4>
              <p>{project.fullDescription}</p>
            </div>

            <div className="detail-section">
              <h4>Technologies Used</h4>
              <div className="technologies-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>My Portfolio</h2>
          <p>A collection of projects that showcase my skills and experience in web development</p>
        </div>

        {/* Featured Projects Section */}
        <div className="featured-section">
          <h3>Featured Projects</h3>
          <div className="featured-projects-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="featured-project-card">
                <div className="featured-icon">
                  {project.icon}
                </div>
                <div className="featured-content">
                  <span className="project-category">{project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-tag small">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag small">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <button 
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={18} />
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="all-projects-section">
          <div className="section-header">
            <h3>All Projects</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button 
                      className="view-details-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} />
                      View Details
                    </button>
                    <div className="project-links-small">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-icon" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-icon" title="View Code">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta">
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;