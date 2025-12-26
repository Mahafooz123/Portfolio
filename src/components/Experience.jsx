// src/components/Experience.jsx

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    company: "Dlithe Consultancy Services",
    location: "Belagavi, Karnataka",
    duration: "Aug – Sept 2023",
    details: [
      "Completed full-stack development training using HTML, CSS, JavaScript, PHP, and jQuery.",
      "Designed and deployed responsive user interfaces for improved multi-device experience.",
      "Collaborated with a team to deliver dynamic content and production-ready components.",
    ],
  },
  {
    id: 2,
    title: "Web Developer",
    company: "M Y Enterprise",
    location: "Belagavi, Karnataka",
    duration: "2024 – Aug 2024",
    details: [
      "Converted Figma/XD designs into responsive, pixel-perfect React.js components.",
      "Built reusable UI components and interactive dashboards using React and JavaScript.",
      "Improved performance with code splitting and ensured cross-browser compatibility.",
      "Used Git for version control and followed clean coding and review practices.",
    ],
  },

  {
    id: 3,
    title: "Developer Intern",
    company: "Flynaut",
    location: "Pune, Maharashtra",
    duration: "Sept – Present (Remote)",
    details: [
      "Worked on frontend development to build responsive and interactive UI components.",
      "Integrated REST APIs and ensured seamless frontend-backend communication.",
      "Delivered multiple web projects under tight deadlines with high performance standards.",
      "Debugged UI issues and ensured cross-browser compatibility.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience">
      <SectionHeader title="Experience" subtitle="Where I've Contributed" />
      <div className="space-y-12">
        {experienceData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            className="p-8 border-l-8 border-accent-gold bg-dark-secondary transition-all duration-500 shadow-gold-glow cursor-pointer"
            whileHover={{
              x: 10, // Slight horizontal shift
              boxShadow: "0 0 30px rgba(212, 163, 79, 0.4)", // Stronger glow on hover
              backgroundColor: "#2E2E2E", // Subtle background change on hover
            }}
            style={{ borderRadius: 0 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-3xl font-sans font-bold text-light-text">
                {job.title}
              </h4>
              <span className="text-accent-gold font-mono text-sm uppercase tracking-widest">
                {job.duration}
              </span>
            </div>
            <p className="text-xl font-mono text-light-text/80 mb-4">
              {job.company}
            </p>
            <p className="text-light-text/70">{job.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
