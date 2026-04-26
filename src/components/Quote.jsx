import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
const Quote = () => {
  const [ref, isInView] = useInView({
    threshold: 0.3
  });
  return <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Sparklers at wedding celebration" src="https://horizons-cdn.hostinger.com/9b1eb89e-da72-4879-b19a-93819bedec35/gemini_generated_image_jvrmbmjvrmbmjvrm-pUSmk.png" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <motion.div ref={ref} initial={{
      opacity: 0,
      y: 30
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 1
    }} className="relative z-10 text-center text-white px-4 max-w-4xl">
        <p className="text-3xl md:text-5xl font-light italic leading-relaxed">
          "Capturing the moments of today that will wow your heart tomorrow"
        </p>
      </motion.div>
    </section>;
};
export default Quote;