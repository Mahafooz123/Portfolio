// src/components/Projects.jsx

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Hotel Management Web Platform (Full Stack)",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    desc: "Built a complete hotel booking and reservation system with dynamic pricing, admin panel, and room/table management.",
    link: "https://www.behance.net/gallery/211536597/Euphoria-Hotel-Restaurant-Reservation-Website",
  },
  {
    id: 2,
    title: "Voice Command Recognition Tool (AI + Web)",
    tech: "JavaScript, Web Speech API",
    desc: "Developed a browser-based voice command and pronunciation checker supporting real-time feedback and STT.",
    link: "https://mahafooz123.github.io/Voice-Recognition/",
  },
  {
    id: 3,
    title: "Job Portal Web App (FrontEnd)",
    tech: "React, TypeScript, Tailwind CSS",
    desc: "Building a job search platform similar to Naukri, enabling profile creation, job applications, and recruiter dashboards.",
    link: "https://github.com/Mahafooz123",
  },
  {
    id: 4,
    title: "Online Book Store (Frontend)",
    tech: "HTML, CSS",
    desc: "Designed a responsive digital bookstore with category filtering, search functionality, and cart UI.",
    link: "https://github.com/Mahafooz123",
  },
  
  {
    id: 5,
    title: "Lip Reading Model (AI + Deep Learning)",
    tech: "Python, TensorFlow, OpenCV, Streamlit",
    desc: "Implemented a neural network lip-reading model trained on the GRID dataset with a user-friendly web interface.",
    link: "https://github.com/Mahafooz123/LipNet",
  },
  {
    id: 6,
    title: "Cake Webstore (Frontend)",
    tech: "React, CSS, JavaScript",
    desc: "Designed a responsive cake-selling webstore with category filtering and a cart system.",
    link: "https://the-cakery-five.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <SectionHeader title="Projects" subtitle="Featured Case Studies" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="relative group h-full">
            {/* Behind Card */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-dark-secondary border-4 border-accent-gold z-0 translate-x-3 translate-y-3 transition-all duration-500 opacity-0 group-hover:opacity-100"
              style={{ borderRadius: 0 }}
            >
              <span
                className="font-mono font-bold uppercase tracking-widest text-dark-primary bg-accent-gold text-sm px-4 py-2 absolute bottom-0 right-0"
                style={{ borderRadius: 0 }}
              >
                View Project →
              </span>
            </a>

            {/* Front Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative z-10 border-4 border-dark-secondary bg-dark-secondary p-8 h-full flex flex-col shadow-gold-glow cursor-pointer 
             group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-500"
              whileHover={{
                scale: 1.05,
                rotate: -12,
                x: -12,
                y: -12,
                boxShadow: "0 10px 25px rgba(212,163,79,0.4)",
                transition: {
                  duration: 0.05,
                  ease: "easeOut",
                },
              }}
            >
              <h4 className="text-3xl font-sans font-bold text-accent-gold mb-2">
                {project.title}
              </h4>
              <p className="text-sm font-mono text-light-text/70 mb-4">
                {project.tech}
              </p>
              <p className="text-light-text/80 mb-auto">{project.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
