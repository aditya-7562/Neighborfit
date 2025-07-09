import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToPreferences }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Your Perfect Neighborhood in Bangalore
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover where you belong based on your lifestyle and preferences
        </motion.p>
        
        <motion.button 
          className="cta-button"
          onClick={scrollToPreferences}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Find My Match
        </motion.button>
      </div>
      
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/bangalore-skyline.jpg" alt="Bangalore Skyline" />
      </motion.div>
    </div>
  );
};

export default Hero;