
import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Separate component for individual image cards to manage their own tilt/parallax state
const GalleryCard = ({ image, index }) => {
  const cardRef = useRef(null);
  
  // 1. Scroll-triggered animation hook
  const isInView = useInView(cardRef, { 
    margin: "0px 0px -100px 0px", 
    once: false 
  });

  // 2. Parallax/Tilt state values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring physics for smooth return and movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform normalized mouse coordinates (-0.5 to 0.5) into degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Calculate mouse position relative to the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5 range
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to original position when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      // Scroll animation properties
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      // Parallax interaction handlers
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Apply 3D perspective to the container and the dynamic rotations
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${image.className}`}
    >
      <motion.div 
        className="w-full h-full"
        // Move the image slightly forward in 3D space to emphasize the tilt depth
        style={{ transform: "translateZ(30px)" }}
      >
        <img
          className="w-full h-full object-cover"
          alt={image.alt}
          src={image.src}
        />
        {/* Subtle overlay that reacts to the hover */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const images = [
    {
      id: 1,
      alt: 'Bride getting ready with bridesmaids helping with dress',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_80t2ro80t2ro80t2-kTQby.png",
      className: "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-[600px]"
    },
    {
      id: 2,
      alt: 'Wedding rings on white flowers',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_ojb4zaojb4zaojb4-uu3Qk.png",
      className: "md:col-span-1 min-h-[300px]"
    },
    {
      id: 3,
      alt: 'Romantic couple portrait in nature',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_2812d32812d32812-ouYY5.png",
      className: "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-[600px]"
    },
    {
      id: 4,
      alt: 'Bride and groom holding hands close-up',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_nnarbsnnarbsnnar-okizN.png",
      className: "md:col-span-1 min-h-[300px]"
    },
    {
      id: 5,
      alt: 'Wedding ceremony outdoor setup with white chairs',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_m8xum4m8xum4m8xu-DSbjU.png",
      className: "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-[600px]"
    },
    {
      id: 6,
      alt: 'Elegant wedding table setting with flowers and candles',
      src: "https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_cpfec3cpfec3cpfe-uukij.png",
      className: "md:col-span-1 min-h-[300px]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Captured Moments
          </h2>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryCard key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
