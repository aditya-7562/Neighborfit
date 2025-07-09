import React from 'react';
import { motion } from 'framer-motion';
import PreferenceCard from './PreferenceCard';

const PreferenceSelector = ({ 
  age, 
  setAge, 
  profession, 
  setProfession, 
  selectedPrefs, 
  togglePref, 
  handleSubmit,
  preferencesList,
  isLoading,
  error
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="preference-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Find Your Match
      </motion.h2>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Tell us about yourself and what matters most to you
      </motion.p>
    
      <motion.form 
        onSubmit={handleSubmit} 
        className="preference-form"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="form-group" variants={itemVariants}>
          <label className="form-label">Your Age:</label>
          <motion.input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
            required
            whileFocus={{ scale: 1.01 }}
            placeholder="Enter your age"
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <label className="form-label">Your Profession:</label>
          <div className="profession-options">
            <motion.label 
              className={`profession-option ${profession === 'student' ? 'selected' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="profession"
                value="student"
                checked={profession === 'student'}
                onChange={(e) => setProfession(e.target.value)}
                className="hidden-input"
              />
              <div className="profession-icon">🎓</div>
              <span>Student</span>
            </motion.label>
            
            <motion.label 
              className={`profession-option ${profession === 'professional' ? 'selected' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="profession"
                value="professional"
                checked={profession === 'professional'}
                onChange={(e) => setProfession(e.target.value)}
                className="hidden-input"
              />
              <div className="profession-icon">💼</div>
              <span>Working Professional</span>
            </motion.label>
          </div>
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <label className="form-label">What matters most to you? <span className="text-muted">(Select at least one)</span></label>
          <div className="preferences-grid">
            {preferencesList.map(pref => (
              <PreferenceCard
                key={pref.key}
                preference={pref}
                isSelected={selectedPrefs.includes(pref.key)}
                onToggle={togglePref}
              />
            ))}
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
          disabled={selectedPrefs.length === 0 || isLoading}
        >
          {isLoading ? 'Finding Matches...' : 'Find My Neighborhood Match'}
        </motion.button>
        
        {isLoading && (
          <motion.div 
            className="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="loader-spinner"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <p>Analyzing neighborhoods...</p>
          </motion.div>
        )}
        
        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
          >
            {error}
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default PreferenceSelector;