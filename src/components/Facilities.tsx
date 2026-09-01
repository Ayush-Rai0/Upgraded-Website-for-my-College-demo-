import React from 'react';
import { ImageIcon } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Facilities() {
  const facilities = [
    { title: "Advanced Computing Lab" },
    { title: "Central Library" },
    { title: "Smart Classrooms" },
    { title: "Innovation Hub" }
  ];

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="facilities" className="p-4 md:p-6 pt-0 overflow-hidden">
      <FadeInSection>
        <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <h3 className="text-blue-900 dark:text-blue-300 font-black text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1 h-4 bg-red-700 dark:bg-red-600"></div>CAMPUS FACILITIES
          </h3>
          <button onClick={handleLinkClick} className="text-red-700 dark:text-red-500 font-bold text-xs uppercase hover:text-red-800 dark:hover:text-red-400 transition-colors tracking-widest">
            View Future Plans &rarr;
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((fac, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col overflow-hidden group cursor-not-allowed transition-colors"
            >
              <div className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center italic text-gray-400 dark:text-gray-500 text-xs aspect-video transition-colors">
                <ImageIcon size={24} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500" />
                <span className="opacity-70">[Image Pending]</span>
              </div>
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex-1 flex items-center transition-colors">
                <p className="text-blue-900 dark:text-gray-200 font-bold text-[10px] md:text-xs uppercase tracking-wider">{fac.title}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </FadeInSection>
    </section>
  );
}
