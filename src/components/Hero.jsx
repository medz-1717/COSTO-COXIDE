import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Romantic wedding couple embracing at sunset" src="https://images.unsplash.com/photo-1571131639829-a022890def49" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">COSTO COXIDE</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl font-light tracking-widest">
            WEDDING PHOTOGRAPHY
          </p>
        </motion.div>
      </div>
    </section>;
};
export default Hero;