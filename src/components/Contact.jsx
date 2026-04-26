import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contactMethods = [
    {
      Icon: Mail,
      label: 'Email',
      value: 'costocoxide@gmail.com',
      href: 'mailto:costocoxide@gmail.com',
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: '+639853778211',
      href: 'tel:+639853778211',
    },
    {
      Icon: Facebook,
      label: 'Facebook',
      value: 'Costo CoXide',
      href: 'https://www.facebook.com/juno.yvo',
    },
    {
      Icon: Instagram,
      label: 'Instagram',
      value: 'costo_coxide',
      href: 'https://www.instagram.com/costo_coxide/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">Get In Touch</h2>
          <div className="w-16 h-px bg-gray-400 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  <method.Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{method.label}</p>
                  <p className="font-light text-gray-800 group-hover:text-black transition-colors">{method.value}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;