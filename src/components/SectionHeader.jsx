// src/components/SectionHeader.jsx

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 2, type: 'spring', stiffness: 50 }}
    className="mb-16" // Increased margin for spacing
  >
    <h3 className="text-6xl font-sans font-extrabold text-light-text mb-3 tracking-tight">
      {title}
    </h3>
    <motion.p 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl font-mono text-accent-gold tracking-widest border-b-2 border-accent-gold/70 pb-2 inline-block max-w-lg overflow-hidden"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

export default SectionHeader;