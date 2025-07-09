import React from 'react';
import { motion } from 'framer-motion';
import ResultCard from './ResultCard';

const Results = ({ results }) => {
  if (results.length === 0) return null;

  return (
    <div className="results-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Top Neighborhood Matches
      </motion.h2>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Based on your preferences, here are the neighborhoods that best match your lifestyle
      </motion.p>
      
      <motion.div 
        className="results-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {results.map((neighborhood, index) => (
          <ResultCard 
            key={neighborhood.name} 
            neighborhood={neighborhood} 
            index={index} 
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="results-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>
          These recommendations are based on your selected preferences and profession. 
          Scores are calculated using data on safety, transport access, affordability, and other factors.
        </p>
      </motion.div>
    </div>
  );
};

export default Results;