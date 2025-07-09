import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavClick('home')}
        >
          <span className="logo-text">NeighborFit</span>
        </motion.div>
        
        <ul className="nav-links">
          <li>
            <motion.a 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => onNavClick('home')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => onNavClick('about')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a 
              className={activeSection === 'preferences' ? 'active' : ''}
              onClick={() => onNavClick('preferences')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Match
            </motion.a>
          </li>
          {activeSection === 'results-section' && (
            <li>
              <motion.a 
                className="active"
                onClick={() => onNavClick('results-section')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                Results
              </motion.a>
            </li>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;