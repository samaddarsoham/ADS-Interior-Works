// Temporarily disable GSAP imports
// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

// Section Components
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Materials from './components/sections/Materials';
import OurWorks from './components/sections/OurWorks';
import Contact from './components/sections/Contact';
import CallToAction from './components/sections/CallToAction';

function App() {
  // Temporarily disable GSAP initialization
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  // }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden', width: '100%', minHeight: '100vh', backgroundColor: 'transparent' }}>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Hero />
        <Services />
        <Materials />
        <OurWorks />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
