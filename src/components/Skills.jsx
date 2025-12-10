// src/components/Skills.jsx

import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 
  'Redux', 'GitHub', 'REST APIs', 'PHP',  'SQL', 'Java',
];

const Skills = () => {
  return (
    <div id="skills">
      <SectionHeader title="Expertise" subtitle="My Technical Skillset" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }} // Initial rotation
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.3, 
                type: 'spring', 
                stiffness: 150 
            }}
            className="p-5 border-2 border-accent-gold/50 bg-dark-secondary text-center text-light-text font-mono uppercase tracking-wider text-lg transition-all duration-100 shadow-gold-glow cursor-pointer"
            whileHover={{ 
                y: -8, 
                scale: 1.05, 
                boxShadow: '0 0 25px rgba(212, 163, 79, 0.6)', // Intense glow on hover
                border: '2px solid #D4A34F' 
            }}
            style={{ borderRadius: 0 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;