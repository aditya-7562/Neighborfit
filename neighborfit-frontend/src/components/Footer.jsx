import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3 className="footer-logo-text">NeighborFit</h3>
            <p className="footer-tagline">Find your perfect neighborhood in Bangalore</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Explore</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#preferences">Find Your Match</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Popular Areas</h4>
              <ul>
                <li>Indiranagar</li>
                <li>Koramangala</li>
                <li>HSR Layout</li>
                <li>Whitefield</li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul>
                <li>info@neighborfit.com</li>
                <li>+91 9876543210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} NeighborFit. All rights reserved.</p>
          <p className="attribution">Made with ❤️ in Bangalore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;