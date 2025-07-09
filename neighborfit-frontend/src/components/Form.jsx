import React from 'react';
import { motion } from 'framer-motion';
import PreferenceCard from './PreferenceCard';

const Form = ({ 
  age, 
  setAge, 
  profession, 
  setProfession, 
  selectedPrefs, 
  togglePref, 
  handleSubmit,
  preferencesList 
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
    <motion.form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-6" variants={itemVariants}>
        <label className="block font-semibold text-gray-700 mb-2">Age:</label>
        <motion.input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
          whileFocus={{ scale: 1.01 }}
        />
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <label className="block font-semibold text-gray-700 mb-2">Profession:</label>
        <div className="flex space-x-6">
          <motion.label 
            className={`flex items-center space-x-2 p-3 rounded-md cursor-pointer ${profession === 'student' ? 'bg-indigo-100 border border-indigo-300' : 'bg-gray-50 border border-gray-200'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              name="profession"
              value="student"
              checked={profession === 'student'}
              onChange={(e) => setProfession(e.target.value)}
              className="hidden"
            />
            <motion.div 
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${profession === 'student' ? 'border-indigo-500' : 'border-gray-400'}`}
            >
              {profession === 'student' && (
                <motion.div 
                  className="w-3 h-3 bg-indigo-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.div>
            <span>Student</span>
          </motion.label>
          
          <motion.label 
            className={`flex items-center space-x-2 p-3 rounded-md cursor-pointer ${profession === 'professional' ? 'bg-indigo-100 border border-indigo-300' : 'bg-gray-50 border border-gray-200'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              name="profession"
              value="professional"
              checked={profession === 'professional'}
              onChange={(e) => setProfession(e.target.value)}
              className="hidden"
            />
            <motion.div 
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${profession === 'professional' ? 'border-indigo-500' : 'border-gray-400'}`}
            >
              {profession === 'professional' && (
                <motion.div 
                  className="w-3 h-3 bg-indigo-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.div>
            <span>Working Professional</span>
          </motion.label>
        </div>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <label className="block font-semibold text-gray-700 mb-3">Your Preferences:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
        className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variants={itemVariants}
      >
        Find My Match
      </motion.button>
    </motion.form>
  );
};

export default Form;