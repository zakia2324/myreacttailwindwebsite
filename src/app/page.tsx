import React from 'react';
import Hero from './components/Hero';
import About from './components/about';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home () {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}


