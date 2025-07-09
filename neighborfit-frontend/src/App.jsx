import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PreferenceSelector from './components/PreferenceSelector';
import Results from './components/Results';
import Footer from './components/Footer';

const preferencesList = [
  { key: 'safety', label: 'Safety', icon: '🛡️', description: 'Neighborhoods with low crime rates and good security' },
  { key: 'transport', label: 'Transport Access', icon: '🚌', description: 'Easy access to public transportation' },
  { key: 'commuteTime', label: 'Commute Time', icon: '⏱️', description: 'Shorter travel times to major business districts' },
  { key: 'greenSpaces', label: 'Green Spaces', icon: '🌳', description: 'Parks, gardens and natural environments nearby' },
  { key: 'socialLife', label: 'Social Life', icon: '🎭', description: 'Proximity to restaurants, cafes, and entertainment' },
  { key: 'peaceQuiet', label: 'Peace & Quiet', icon: '🧘', description: 'Low noise levels and peaceful surroundings' },
  { key: 'affordability', label: 'Affordability', icon: '💰', description: 'Housing and living costs that match your budget' }
];

export default function App() {
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('student');
  const [selectedPrefs, setSelectedPrefs] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showResults, setShowResults] = useState(false);

  const togglePref = (pref) => {
    setSelectedPrefs(prev =>
      prev.includes(pref)
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/match', {
        preferences: selectedPrefs,
        profession
      });
      setResults(response.data);
      setShowResults(true);
      // Scroll to results section
      document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setError('Error fetching results. Is the server running?');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'preferences', 'results-section'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main>
        <section id="home" className="section">
          <Hero scrollToPreferences={() => scrollToSection('preferences')} />
        </section>

        <section id="about" className="section bg-light">
          <About />
        </section>

        <section id="preferences" className="section">
          <PreferenceSelector
            age={age}
            setAge={setAge}
            profession={profession}
            setProfession={setProfession}
            selectedPrefs={selectedPrefs}
            togglePref={togglePref}
            handleSubmit={handleSubmit}
            preferencesList={preferencesList}
            isLoading={isLoading}
            error={error}
          />
        </section>

        <AnimatePresence>
          {showResults && (
            <motion.section 
              id="results-section" 
              className="section bg-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Results results={results} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
