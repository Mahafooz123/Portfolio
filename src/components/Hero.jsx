// src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Use your image URL here
  const myImageUrl = "./pic2.png";
  const yourName = "Mahafooz Killedar";
  const yourTitle = "FRONT-END ENGINEER";

  // Animation variants for text - added bounce and a better staggered transition
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slower stagger for drama
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }, // Spring for smooth landing
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-4 md:p-10">
      {/* Text Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl md:order-1 order-2 mt-10 md:mt-0"
      >
        <motion.p
          variants={item}
          className="text-xl text-accent-gold font-mono tracking-widest mb-3"
        >
          HELLO, I'M
        </motion.p>
        <motion.h1
          variants={item}
          className="text-7xl lg:text-8xl font-sans font-extrabold leading-tight tracking-tighter text-light-text mb-4"
        >
          {yourName}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-accent-gold/80 font-mono tracking-wider mb-6 text-sm"
        >
          Based in Belagavi, India
          <p> Transforming Ideas into Pixel-Perfect Products</p>
        </motion.p>

        <motion.h2
          variants={item}
          className="text-2xl font-mono font-bold tracking-widest text-accent-gold mb-8"
        >
          {yourTitle}
        </motion.h2>
        <motion.p
          variants={item}
          className="text-light-text/80 max-w-xl mb-10 text-lg leading-relaxed"
        >
          Passionate about building seamless digital experiences with modern
          frontend engineering and scalable full-stack solutions. Experienced in
          crafting interactive React interfaces, integrating robust APIs, and
          experimenting with emerging AI technologies—from speech recognition to
          deep learning models.
        </motion.p>

        <motion.a
          variants={item}
          href="#projects"
          className="inline-block px-10 py-4 text-lg font-mono uppercase border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-primary transition-all duration-300 shadow-gold-glow" // Use new shadow
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(212, 163, 79, 0.8)",
          }} // Enhanced hover glow
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Image Wrapper with Exact Touching Corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.0,
          type: "spring",
          stiffness: 50,
          delay: 0.5,
        }}
        className="relative md:order-2 order-1 flex justify-center items-end
             w-full md:w-[420px] h-[550px]"
      >
        {/* Base Gold Frame (NO padding now) */}
        <div className="absolute inset-0 border-2 border-accent-gold bg-dark-secondary">
          {/* --- FINAL PERFECT THICK CORNERS --- */}
          {/* Top Left */}
          <span className="absolute top-0 left-0 w-10 h-[4px] bg-accent-gold"></span>
          <span className="absolute top-0 left-0 h-10 w-[4px] bg-accent-gold"></span>

          {/* Top Right */}
          <span className="absolute top-0 right-0 w-10 h-[4px] bg-accent-gold"></span>
          <span className="absolute top-0 right-0 h-10 w-[4px] bg-accent-gold"></span>

          {/* Bottom Left */}
          <span className="absolute bottom-0 left-0 w-10 h-[4px] bg-accent-gold"></span>
          <span className="absolute bottom-0 left-0 h-10 w-[4px] bg-accent-gold"></span>

          {/* Bottom Right */}
          <span className="absolute bottom-0 right-0 w-10 h-[4px] bg-accent-gold"></span>
          <span className="absolute bottom-0 right-0 h-10 w-[4px] bg-accent-gold"></span>
        </div>

        {/* Main Image */}
        <motion.img
          src={myImageUrl}
          alt={yourName}
          className="relative w-auto h-full object-cover z-10 
               scale-[0.9] origin-bottom mb-[2px]"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3 }}
        />

        {/* Offset Outer Thin Frame (Luxury Double Border) */}
        <div className="absolute inset-0 border-2 border-accent-gold translate-x-3 translate-y-3 z-[-1]"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
