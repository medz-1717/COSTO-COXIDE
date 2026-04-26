
import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Quote from '@/components/Quote';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>costo_coxide WEDDING PHOTOGRAPHY</title>
        <meta name="description" content="Professional wedding photographer capturing the moments of today that will wow your heart tomorrow. View my portfolio and book your session." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <Quote />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
