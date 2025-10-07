import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import DotBubbles from './DotBubbles';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="about" id="about">
      <div className="bg-decoration bg-decoration-3"></div>
      
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-title" variants={fadeInUp}>
          <h2>About Me</h2>
          <p className="subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={fadeInUp}>
            <h3>Hello! I'm <span className="gradient-text">Ahsan Ali</span></h3>
            <p>
              A passionate <strong>Frontend Web Developer</strong> from Pakistan with a keen eye for detail 
              and a love for creating seamless user experiences. I specialize in building modern, 
              responsive web applications that not only look great but also provide exceptional functionality.
            </p>
            <p>
              I completed my Bachelor's degree in <strong>Information Technology</strong> from 
              <strong> Mirpur University of Science and Technology (MUST)</strong>, where I developed 
              a strong foundation in computer science and web development principles.
            </p>
            <p>
              My journey in web development has been driven by curiosity and a commitment to 
              continuous learning. I'm always exploring new technologies and best practices to 
              deliver high-quality solutions that exceed expectations.
            </p>
          </motion.div>

          <motion.div className="about-cards" variants={fadeInUp}>
            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <DotBubbles count={6} />
              <motion.div
                className="card-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaGraduationCap />
              </motion.div>
              <h4>Education</h4>
              <p>BS Information Technology</p>
              <p className="card-detail">Mirpur University of Science and Technology (MUST)</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <DotBubbles count={6} />
              <motion.div
                className="card-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaLaptopCode />
              </motion.div>
              <h4>Experience</h4>
              <p>Frontend Development</p>
              <p className="card-detail">Completed internship at Arch Technologies</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <DotBubbles count={6} />
              <motion.div
                className="card-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCode />
              </motion.div>
              <h4>Projects</h4>
              <p>4+ Completed Projects</p>
              <p className="card-detail">Weather App, Portfolio, Music Player & Quiz App</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
