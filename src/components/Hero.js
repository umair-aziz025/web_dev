import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Try to load profile image
    const loadImage = async () => {
      try {
        const image = await import('../assets/profile1.jpg');
        setProfileImage(image.default);
      } catch {
        try {
          const image = await import('../assets/profile.jpeg');
          setProfileImage(image.default);
        } catch {
          // No profile image found, will show placeholder
          setProfileImage(null);
        }
      }
    };
    loadImage();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div className="hero-text">
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              Muhammad <span className="gradient-text">Ahsan Ali</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-title"
              variants={itemVariants}
            >
              Frontend Web Developer
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Passionate about creating beautiful, responsive, and user-friendly web experiences. 
              I transform ideas into elegant digital solutions using modern technologies.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a
                href="mailto:ahsanali97160@gmail.com"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="profile-image-wrapper">
              {profileImage ? (
                <img src={profileImage} alt="Muhammad Ahsan Ali" className="profile-image" />
              ) : (
                <div className="profile-placeholder">
                  <span>MA</span>
                </div>
              )}
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
