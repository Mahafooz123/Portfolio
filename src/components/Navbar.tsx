// src/components/Navbar.tsx

import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
      // Apply a more noticeable shadow and the golden border
      className="fixed top-0 left-0 w-full z-50 bg-dark-primary/90 backdrop-blur-md shadow-2xl shadow-dark-primary border-b border-accent-gold/50"
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-16 h-20">
        <a
          href="https://www.linkedin.com/in/mahafooz-d-killedar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-gold hover:text-light-text transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="hover:scale-110 transition-transform duration-300"
            style={{ filter: "drop-shadow(0 0 6px rgba(212, 163, 79, 0.6))" }}
          >
            <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 010 14.854V1.146zM4.943 13.5V6.207H2.542V13.5h2.401zm-1.2-8.35c.837 0 1.356-.554 1.356-1.248-.015-.71-.519-1.249-1.34-1.249-.822 0-1.357.54-1.357 1.249 0 .694.52 1.248 1.326 1.248h.015zM13.458 13.5V9.652c0-2.063-1.098-3.022-2.56-3.022-1.181 0-1.699.658-1.992 1.122v-1H6.505c.03.662 0 6.748 0 6.748h2.401V9.859c0-.194.014-.388.072-.526.158-.387.518-.788 1.123-.788.793 0 1.112.595 1.112 1.468V13.5h2.245z" />
          </svg>
        </a>

        <div className="space-x-8 hidden md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-light-text font-mono uppercase text-sm tracking-widest hover:text-accent-gold transition-colors duration-300 relative group py-2"
              whileHover={{ scale: 1.05, y: -2 }} // Added slight lift on hover
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, type: "tween" }}
            >
              {item.name}
              {/* Gold underline effect on hover - now a thicker, more deliberate line */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
