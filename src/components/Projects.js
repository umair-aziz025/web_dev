import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import DotBubbles from './DotBubbles';
import './Projects.css';

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      title: 'Weather App',
      description: 'A fully functional weather application that displays real-time weather conditions for any city using OpenWeatherMap API. Features dynamic UI with weather icons, background transitions, and comprehensive error handling.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: '🌤️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website showcasing academic background, skills, and projects. Built with modern UI/UX principles, smooth animations, and interactive elements. Deployed via GitHub Pages with complete CI/CD workflow.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      image: '💼',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Music Player App',
      description: 'An interactive browser-based music player with playlist management, play/pause controls, track progress monitoring, and seek-bar manipulation. Features rotating album cover animations and responsive design.',
      tech: ['HTML5', 'CSS', 'JavaScript', 'Audio API'],
      image: '🎵',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Quiz App',
      description: 'A dynamic quiz system with multiple-choice questions, real-time score tracking, and personalized feedback. Built with data-driven architecture using JavaScript arrays and objects for question management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      image: '📝',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="bg-decoration bg-decoration-2"></div>
      
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-title" variants={fadeInUp}>
          <h2>My Projects</h2>
          <p className="subtitle">Things I've built along my journey</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <DotBubbles count={6} />
              <motion.div 
                className="project-image"
                style={{ background: project.gradient }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="project-emoji">{project.image}</span>
              </motion.div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
