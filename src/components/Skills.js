import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, 
  FaNpm, FaFigma, FaBootstrap, FaSass 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiFramer, SiVisualstudiocode, SiNetlify, 
  SiVercel, SiRedux 
} from 'react-icons/si';
import DotBubbles from './DotBubbles';
import './Skills.css';

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 90 },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 85 },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 88 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 82 },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', level: 85 },
    { name: 'Sass/SCSS', icon: <FaSass />, color: '#CC6699', level: 78 },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', level: 75 },
    { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF', level: 80 },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 88 },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', level: 90 },
    { name: 'NPM', icon: <FaNpm />, color: '#CB3837', level: 85 },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC', level: 92 },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E', level: 70 },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000', level: 82 },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7', level: 80 }
  ];

  return (
    <section className="skills" id="skills">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-title" variants={fadeInUp}>
          <h2>My Skills</h2>
          <p className="subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div className="skills-grid" variants={fadeInUp}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: `0 20px 40px ${skill.color}40`
              }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              {/* Only show bubbles on first 4 cards */}
              {index > 8 && <DotBubbles count={4} />}
              <motion.div 
                className="skill-icon"
                style={{ color: skill.color }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
              <h4>{skill.name}</h4>
              
              <div className="skill-progress">
                <motion.div 
                  className="skill-progress-bar"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
              <p className="skill-level">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
