import React from 'react';
import { ImageIcon } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Gallery() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="gallery" className="p-4 md:p-6 pt-0 overflow-hidden">
      <FadeInSection>
        <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <h3 className="text-blue-900 dark:text-blue-300 font-black text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1 h-4 bg-red-700 dark:bg-red-600"></div>ACTIVITY & GALLERY
          </h3>
          <button onClick={handleLinkClick} className="text-red-700 dark:text-red-500 font-bold text-xs uppercase hover:text-red-800 dark:hover:text-red-400 transition-colors tracking-widest">
            View All Photos &rarr;
          </button>
        </div>
        
        {/* CSS Grid for perfectly aligned photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          <div className="col-span-2 row-span-2 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 group overflow-hidden relative cursor-not-allowed transition-colors">
             <ImageIcon size={32} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500 relative z-10" />
             <span className="opacity-70 text-sm font-medium relative z-10">[Campus Tech Fest 2023]</span>
             <div className="absolute inset-0 bg-blue-900/5 dark:bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 group overflow-hidden relative cursor-not-allowed transition-colors">
             <ImageIcon size={24} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500 relative z-10" />
             <span className="opacity-70 text-[10px] uppercase font-bold relative z-10">[Library Workshop]</span>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 group overflow-hidden relative cursor-not-allowed transition-colors">
             <ImageIcon size={24} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500 relative z-10" />
             <span className="opacity-70 text-[10px] uppercase font-bold relative z-10">[Sports Day]</span>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 group overflow-hidden relative cursor-not-allowed transition-colors">
             <ImageIcon size={24} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500 relative z-10" />
             <span className="opacity-70 text-[10px] uppercase font-bold relative z-10">[Guest Lecture]</span>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 group overflow-hidden relative cursor-not-allowed transition-colors">
             <ImageIcon size={24} className="mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500 relative z-10" />
             <span className="opacity-70 text-[10px] uppercase font-bold relative z-10">[Hackathon]</span>
          </div>
        </div>
        </div>
      </FadeInSection>
    </section>
  );
}
