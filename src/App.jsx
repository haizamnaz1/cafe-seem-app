import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import MenuGrid from './components/MenuGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <MenuGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
