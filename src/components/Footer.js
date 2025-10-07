import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <motion.h3
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              Ahsan<span className="footer-dot">.</span>
            </motion.h3>
            <p className="footer-tagline">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                Home
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                About
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                Skills
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                Projects
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="mailto:ahsanali97160@gmail.com"
                className="footer-social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} All rights reserved.
            </p>
            <p className="footer-signature">
              Designed with{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ec4899', '#ef4444', '#ec4899']
                }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ display: 'inline-block' }}
              >
                <FaHeart />
              </motion.span>
              {' '}by{' '}
              <span className="signature-name">Ahsan</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
