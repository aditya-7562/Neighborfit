import React from 'react';
import { motion } from 'framer-motion';

const ResultCard = ({ neighborhood, index }) => {
  const { name, matchScore } = neighborhood;
  
  // Calculate a color based on match score
  const getScoreColor = (score) => {
    if (score >= 4) return 'excellent-match';
    if (score >= 3) return 'good-match';
    if (score >= 2) return 'average-match';
    return 'poor-match';
  };

  // Calculate match percentage
  const matchPercentage = Math.round((matchScore / 5) * 100);

  return (
    <motion.div
      className="result-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
    >
      <div className="result-header">
        <h3 className="neighborhood-name">{name}</h3>
        <motion.div 
          className={`match-score ${getScoreColor(matchScore)}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {matchPercentage}% Match
        </motion.div>
      </div>
      
      <div className="match-details">
        <div className="score-label">
          <span className="score-value">{matchScore.toFixed(1)}</span>
          <span className="score-max">/5</span>
        </div>
        
        <div className="score-bar-container">
          <motion.div 
            className={`score-bar ${getScoreColor(matchScore)}`}
            initial={{ width: 0 }}
            animate={{ width: `${(matchScore / 5) * 100}%` }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        </div>
      </div>
      
      <div className="neighborhood-features">
        {getNeighborhoodFeatures(name)}
      </div>
    </motion.div>
  );
};

// Helper function to provide some features based on neighborhood name
const getNeighborhoodFeatures = (name) => {
  const featuresMap = {
    'Indiranagar': 'Trendy area with cafes, pubs, and shopping',
    'Koramangala': 'Tech hub with vibrant nightlife and restaurants',
    'Whitefield': 'IT corridor with tech parks and modern apartments',
    'Jayanagar': 'Traditional residential area with good markets',
    'HSR Layout': 'Planned layout with tech offices and good connectivity',
    'Malleshwaram': 'Cultural hub with traditional markets and temples',
    'BTM Layout': 'Affordable area popular with young professionals',
    'Rajajinagar': 'Well-established residential area with good amenities',
    'Marathahalli': 'Growing area near the IT corridor with shopping malls',
    'Yelahanka': 'Spacious suburb with greenery and new developments'
  };
  
  return featuresMap[name] || 'A popular neighborhood in Bangalore';
};

export default ResultCard;