import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar';
import ImageReel from './components/ImageReel';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showReel, setShowReel] = useState(true)

  return (
    <>
      {showReel && <ImageReel onComplete={() => setShowReel(false)} />}

      <div className="bg-dark">
        <Navbar />
        
        <Hero />

        <section id="portfolio" className="min-h-screen bg-light flex items-center justify-center">
          <h2 className="text-5xl font-bold text-primary">Portfolio Section</h2>
        </section>

        <section id="about" className="min-h-screen bg-white flex items-center justify-center">
          <h2 className="text-5xl font-bold text-primary">About Section</h2>
        </section>

        <section id="services" className="min-h-screen bg-light flex items-center justify-center">
          <h2 className="text-5xl font-bold text-primary">Services Section</h2>
        </section>

        <section id="contact" className="min-h-screen bg-primary flex items-center justify-center">
          <h2 className="text-5xl font-bold text-secondary">Contact Section</h2>
        </section>
      </div>
  
    </>
  )
}

export default App;
