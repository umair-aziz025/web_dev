import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import DotBubbles from './DotBubbles';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="bg-decoration bg-decoration-1"></div>
      
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-title" variants={fadeInUp}>
          <h2>Get In Touch</h2>
          <p className="subtitle">Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={fadeInUp}>
            <h3>Let's Talk</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaEnvelope />
                </motion.div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:ahsanali97160@gmail.com">ahsanali97160@gmail.com</a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaPhone />
                </motion.div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+923160863495">+92 316 0863495</a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Mirpur, Azad Kashmir, Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={fadeInUp}
            style={{ position: 'relative', overflow: 'visible' }}
          >
            <DotBubbles count={8} />
            <div className="form-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Send Message
            </motion.button>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
