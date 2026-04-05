import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './menu';
import TravelerFavorites from './components/TravelerFavorites';
import Differentiators from './components/Differentiators';
import CuratedSelections from './components/CuratedSelections';
import About from './components/About';
import EventsStrip from './components/EventsStrip';
import Testimonials from './components/Testimonials';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import { pageTransitionVariants } from './components/animations';
import './App.css';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      <Hero />
      <TravelerFavorites />
      <Differentiators />
      <CuratedSelections />
      <About />
      <EventsStrip />
      <Testimonials />
      <PreFooter />
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
