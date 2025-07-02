"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart, and checkout functionality.",
    image: "/assets/project1.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind Css"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations and contact form.",
    image: "/assets/project2.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/assets/project3.jpg",
    tags: ["React", "Firebase", "Redux"],
    link: "#"
  }
];

const Projects = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project comes with unique challenges and solutions.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
          >
            Add Your Project
          </button>
        </motion.div>
      </div>
      
      {showForm && <ProjectForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Projects;