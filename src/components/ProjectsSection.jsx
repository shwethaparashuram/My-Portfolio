import React from 'react';
import cn from '../libs/Utils';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Bloomify',
    description:
      'Developed front-end features and optimized UI for a better user experience.',
    imageUrl: '/images/Bloomify.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'tailwindcss'],
    category: 'Company',
  },

  {
    id: 2,
    title: 'Timewise Application',
    description:
      'End-to-end implementation including frontend, backend logic, and database architecture.',
    imageUrl: '/images/Timewise.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'Node.js', 'NestJS', 'TypeORM'],
    category: 'Company',
  },

  {
    id: 3,
    title: 'Chapchimp Company Platform',
    description:
      'Developed modules, optimized data flow, and improved backend performance.',
    imageUrl: '/images/chapchimp.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'Express.js', 'PostgreSQL'],
    category: 'Company',
  },
  {
    id: 4,
    title: 'Brighter Green Engineering ',
    description:
      'Full stack development of responsive UI, secure API integration, and core modules.',
    imageUrl: '/images/BGE.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'Express.js', 'Sequelize'],
    category: 'Company',
  },
  {
    id: 5,
    title: 'SnehaSelect',
    description:
      'Built REST APIs and UI components for product selection and management.',
    imageUrl: '/images/Sneha.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'Chakra UI', 'Sequelize'],
    category: 'Company',
  },
  {
    id: 6,
    title: 'CodeQuick Client Portal',
    description:
      'Developed front-end features and optimized UI for a better user experience.',
    imageUrl: '/images/codequick.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js'],
    category: 'Company',
  },
  {
    id: 7,
    title: 'My Protfolio',
    description:
      'Developed front-end features and optimized UI for a better user experience.',
    imageUrl: '/images/portfolio.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['React.js', 'Tailwind.css'],
    category: 'Personal',
  },
  {
    id: 8,
    title: 'User Form',
    description:
      'Developed front-end features and optimized UI for a better user experience.',
    imageUrl: '/images/codequick.png',
    projectUrl: '#',
    githubUrl: '#',
    tags: ['backend'],
    category: 'Personal',
  },
];

const projectCategories = ['Personal', 'Company'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState('Personal');

  const filterProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {' '}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my highlighted company projects that showcase my
          skills and experience in web development.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
            group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs 
                        font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title} </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {project.description}
              </p>
              {activeCategory === 'Personal' && (
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
