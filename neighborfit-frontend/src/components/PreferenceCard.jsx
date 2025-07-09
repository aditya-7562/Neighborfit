import React from 'react';
import { motion } from 'framer-motion';

const PreferenceCard = ({ preference, isSelected, onToggle }) => {
  const { key, label, icon, description } = preference;
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onToggle(key)}
      className={`preference-card ${isSelected ? 'selected' : ''}`}
      layout
    >
      <motion.div className="preference-content">
        <div className="preference-icon">{icon}</div>
        <div className="preference-info">
          <h3 className="preference-label">{label}</h3>
          <p className="preference-description">{description}</p>
        </div>
        <div className="preference-indicator">
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="selected-indicator"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PreferenceCard;