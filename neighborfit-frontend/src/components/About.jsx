import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: '🏙️',
      title: 'Local Expertise',
      description: 'Our algorithm is built on local knowledge and data about Bangalore neighborhoods.'
    },
    {
      icon: '🔍',
      title: 'Personalized Matching',
      description: 'We consider your lifestyle, preferences, and priorities to find your perfect match.'
    },
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Our recommendations are based on comprehensive neighborhood data and scoring.'
    }
  ];

  return (
    <div className="about-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About NeighborFit
      </motion.h2>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We help you find the perfect neighborhood in Bangalore that matches your lifestyle and preferences.
      </motion.p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="about-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>
          NeighborFit was created to help newcomers and locals alike find their ideal place to live in Bangalore. 
          Our city is diverse, with each neighborhood offering a unique living experience. Whether you're a student, 
          working professional, or family, we'll help you discover areas that match your priorities.
        </p>
        <p>
          Using data on safety, transport access, green spaces, social life, and more, our algorithm calculates 
          personalized neighborhood matches based on what matters most to you.
        </p>
      </motion.div>
    </div>
  );
};

export default About;