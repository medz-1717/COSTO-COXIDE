
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView.js';
import { Button } from '@/components/ui/button.jsx';
import { Download } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });

  const handleBookSession = () => {
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleDownloadResume = () => {
    // Open Google Drive resume link in a new tab with security attributes
    window.open(
      'https://drive.google.com/file/d/1CzhySXVdjR1t7dYD84D5cXZ0O4To4sHr/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref} 
            initial={{ opacity: 0, x: -50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <img 
              className="w-full h-[600px] object-cover shadow-xl rounded-sm" 
              alt="Photographer Charlotte McCoy with camera" 
              src="https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/53731371-e6a6-44c7-b2f0-10cf6baea94c-MVebb.jpg" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">About me</h2>
            <div className="w-16 h-px bg-gray-400"></div>
            
            <p className="text-gray-700 leading-relaxed">
              My lens is an extension of my heart, capturing the fleeting, beautiful moments that define your story. With every click, I aim to weave raw emotions, genuine connections, and the unique essence of your day into timeless memories.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I believe in a collaborative and personal approach, ensuring your comfort and vision are at the forefront. My goal is to create not just photographs, but a vivid narrative that transports you back to those cherished moments for years to come.
            </p>

            <p className="text-gray-700 leading-relaxed">
              It's more than just a photograph; it's an heirloom, a whisper of love, and a testament to the beauty found in every celebration. Let's create something unforgettable together.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                whileTap={{ y: 0, scale: 0.98 }}
                className="rounded-md inline-block"
              >
                <Button 
                  onClick={handleBookSession} 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-sm tracking-wider h-auto transition-colors"
                >
                  BOOK A SESSION
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                whileTap={{ y: 0, scale: 0.98 }}
                className="rounded-md inline-block"
              >
                <Button 
                  variant="outline"
                  onClick={handleDownloadResume} 
                  aria-label="Download Resume PDF from Google Drive"
                  className="border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100 px-8 py-6 text-sm tracking-wider flex items-center gap-2 h-auto transition-colors"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD RESUME
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
