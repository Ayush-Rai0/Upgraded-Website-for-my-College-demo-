import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoginPortal from './components/LoginPortal';
import FeaturedPrograms from './components/FeaturedPrograms';
import Gallery from './components/Gallery';
import Facilities from './components/Facilities';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import ToastAlert from './components/ToastAlert';
import SkeletonLoader from './components/SkeletonLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoading = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const targetId = customEvent.detail;
      
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        if (targetId) {
          // Need to wait for React to re-render the actual content
          requestAnimationFrame(() => {
            setTimeout(() => {
              const section = document.getElementById(targetId);
              if (section) {
                const headerOffset = 80;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 100);
          });
        }
      }, 1500);
    };

    window.addEventListener('trigger-loading', handleLoading);
    return () => window.removeEventListener('trigger-loading', handleLoading);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-red-700 selection:text-white transition-colors duration-300">
      <ToastAlert />
      <Header />
      
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <main className="flex-1 flex flex-col w-full animate-fadeIn">
          <Hero />
          <LoginPortal />
          <FeaturedPrograms />
          <Gallery />
          <Facilities />
          <FAQ />
        </main>
      )}
      
      <ContactFooter />
    </div>
  );
}
