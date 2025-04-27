import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Share2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  imageBefore: string;
  imageAfter: string;
  completed: string;
}

const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
  delay?: number;
}> = ({ project, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={project.imageAfter} 
          alt={project.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <p className="text-white text-sm font-medium mb-1">
              {project.category}
            </p>
            <h3 className="text-white text-xl font-bold">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <p className="mb-3 font-medium">Click to View</p>
            <ArrowRight className="mx-auto h-8 w-8" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button onClick={onClose} className="text-neutral-500 hover:text-neutral-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-neutral-500 mb-1">Before</p>
              <img 
                src={project.imageBefore} 
                alt={`${project.title} - Before`} 
                className="w-full rounded-lg h-72 object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">After</p>
              <img 
                src={project.imageAfter} 
                alt={`${project.title} - After`} 
                className="w-full rounded-lg h-72 object-cover"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Project Details</h4>
            <p className="text-neutral-700 mb-4">{project.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-sm text-neutral-500">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Location</p>
                <p className="font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Completed</p>
                <p className="font-medium">{project.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-neutral-200">
            <button onClick={onClose} className="btn btn-primary">
              Close
            </button>
            <button className="flex items-center text-primary-600 hover:text-primary-800">
              <Share2 className="h-4 w-4 mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Bathroom Renovation',
      category: 'Bathroom Remodeling',
      description: 'Complete bathroom remodel including new fixtures, tilework, and efficient plumbing solutions. This project transformed an outdated bathroom into a modern spa-like retreat with water-saving fixtures and improved functionality.',
      location: 'Watertown, NY',
      imageBefore: 'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'July 2023',
    },
    {
      id: 2,
      title: 'Tankless Water Heater Installation',
      category: 'Water Heaters',
      description: 'Replaced an old, inefficient water heater with a modern tankless system. This upgrade provides endless hot water while reducing energy costs and saving valuable space in the utility room.',
      location: 'Syracuse, NY',
      imageBefore: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/6647469/pexels-photo-6647469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'April 2023',
    },
    {
      id: 3,
      title: 'Main Sewer Line Replacement',
      category: 'Repair',
      description: 'Replaced a damaged sewer line causing frequent backups and property damage. Using modern trenchless technology, we minimized disruption to the landscape while providing a long-lasting solution.',
      location: 'Albany, NY',
      imageBefore: 'https://images.pexels.com/photos/5590581/pexels-photo-5590581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'March 2023',
    },
    {
      id: 4,
      title: 'Kitchen Sink & Faucet Upgrade',
      category: 'Installation',
      description: 'Installed a premium farmhouse sink and touchless faucet in this kitchen renovation project. The new fixtures add both functionality and style to the space while improving water efficiency.',
      location: 'Rochester, NY',
      imageBefore: 'https://images.pexels.com/photos/6306077/pexels-photo-6306077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/6195057/pexels-photo-6195057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'February 2023',
    },
    {
      id: 5,
      title: 'Basement Flood Cleanup & Prevention',
      category: 'Emergency',
      description: 'Responded to a severe basement flooding situation, removing water, repairing the broken pipe, and installing a sump pump system to prevent future flooding issues.',
      location: 'Utica, NY',
      imageBefore: 'https://images.pexels.com/photos/8851696/pexels-photo-8851696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/8851685/pexels-photo-8851685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'December 2022',
    },
    {
      id: 6,
      title: 'Commercial Bathroom Renovation',
      category: 'Commercial',
      description: 'Complete renovation of a commercial restroom facility, including water-efficient toilets, touchless faucets, and ADA-compliant fixtures to meet current building codes and standards.',
      location: 'Buffalo, NY',
      imageBefore: 'https://images.pexels.com/photos/6508947/pexels-photo-6508947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/7746583/pexels-photo-7746583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'November 2022',
    },
    {
      id: 7,
      title: 'Whole House Repipe',
      category: 'Renovation',
      description: 'Replaced aging galvanized pipes with modern PEX plumbing throughout the entire home, improving water pressure, quality, and preventing future leaks and corrosion issues.',
      location: 'Ithaca, NY',
      imageBefore: 'https://images.pexels.com/photos/5588532/pexels-photo-5588532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/6647459/pexels-photo-6647459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'September 2022',
    },
    {
      id: 8,
      title: 'Luxury Shower Installation',
      category: 'Bathroom Remodeling',
      description: 'Transformed a standard tub/shower combo into a luxurious walk-in shower with multiple showerheads, bench seating, and custom tilework for a spa-like experience at home.',
      location: 'Watertown, NY',
      imageBefore: 'https://images.pexels.com/photos/6444279/pexels-photo-6444279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAfter: 'https://images.pexels.com/photos/7746580/pexels-photo-7746580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: 'August 2022',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-primary-900 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-primary-100 text-xl mb-6">
              Browse through our collection of successfully completed plumbing projects. See the before and after transformation for yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section 
        ref={projectsRef}
        className="section bg-neutral-50"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-neutral-600">
                No projects match the selected filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-100 text-xl mb-8">
              Whether you need a simple repair or a complete bathroom remodel, our team is ready to deliver exceptional results.
            </p>
            <a href="/contact" className="btn btn-accent text-lg">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;