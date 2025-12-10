import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    // ⬇️ DARK MODE ENABLED GLOBALLY ⬇️
    <div className="min-h-screen bg-dark-primary text-light-text">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28"> {/* Increased top padding */}
        <section id="hero" className="min-h-[90vh] flex items-center">
          <Hero />
        </section>
        <section id="experience" className="py-32"> {/* Increased vertical padding */}
          <Experience />
        </section>
        <section id="skills" className="py-32">
          <Skills />
        </section>
        <section id="projects" className="py-32">
          <Projects />
        </section>
        <section id="contact" className="py-32">
          <Contact />
        </section>
      </main>
      <footer className="text-center py-8 text-light-text/70 border-t border-accent-gold/50">
        <p>&copy; {new Date().getFullYear()} [Mahafooz]. Crafted with React and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;