// src/components/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <div id="contact">
      <SectionHeader title="Let's Connect" subtitle="Ready to Collaborate" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-light-text/80 mb-10 text-xl font-mono tracking-wider text-center">
          Ready to collaborate on a high-end project? Let's discuss your vision.
        </p>

        <form
          className="space-y-6"
          action="https://formspree.io/f/manrdznb"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-dark-secondary border-2 border-accent-gold/20 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold placeholder-light-text/50 focus:outline-none transition-all text-light-text font-mono shadow-gold-glow/50"
              style={{ borderRadius: 0 }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-dark-secondary border-2 border-accent-gold/20 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold placeholder-light-text/50 focus:outline-none transition-all text-light-text font-mono shadow-gold-glow/50"
              style={{ borderRadius: 0 }}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full p-4 bg-dark-secondary border-2 border-accent-gold/20 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold placeholder-light-text/50 focus:outline-none transition-all text-light-text font-mono resize-none shadow-gold-glow/50"
              style={{ borderRadius: 0 }}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="inline-block px-12 py-4 text-xl font-mono uppercase border-2 border-accent-gold bg-accent-gold text-dark-primary transition-all duration-500 shadow-gold-glow"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'transparent',
              color: '#D4A34F',
              boxShadow: '0 0 30px rgba(212, 163, 79, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
