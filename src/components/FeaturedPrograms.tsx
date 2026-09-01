import React from 'react';
import FadeInSection from './FadeInSection';

export default function FeaturedPrograms() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="courses" className="p-4 md:p-6 pt-0 overflow-hidden">
      <FadeInSection>
        <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <h3 className="text-blue-900 dark:text-blue-300 font-black text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1 h-4 bg-red-700 dark:bg-red-600"></div>FEATURED PROGRAMS
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BCA Card (Highlighted) */}
          <div className="bg-blue-900 dark:bg-blue-800 rounded-2xl p-6 shadow-md border border-blue-800 dark:border-blue-700 flex flex-col text-white relative overflow-hidden group transition-colors">
            <div className="absolute top-0 right-0 bg-red-700 dark:bg-red-600 text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider">Top Ranked</div>
            <h4 className="text-xl font-black mb-2 relative z-10">Bachelor of Computer Applications (BCA)</h4>
            <p className="text-blue-100 text-sm mb-6 flex-1 relative z-10">A comprehensive 3-year program designed to build strong foundations in software development, web technologies, and database management.</p>
            <button onClick={handleLinkClick} className="bg-white dark:bg-gray-100 text-blue-900 font-bold text-xs py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white transition-colors mt-auto relative z-10 text-center tracking-wider w-full">VIEW CURRICULUM &rarr;</button>
          </div>
          
          {/* Placeholder Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col hover:border-blue-300 dark:hover:border-gray-700 transition-colors">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">BBA (Bachelor of Business Administration)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">Prepare for leadership roles in the global business environment with practical training and foundational management principles.</p>
            <button onClick={handleLinkClick} className="bg-gray-50 dark:bg-gray-950 text-blue-900 dark:text-gray-300 border border-gray-200 dark:border-gray-800 font-bold text-xs py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-auto text-center tracking-wider w-full">LEARN MORE</button>
          </div>

          {/* Placeholder Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col hover:border-blue-300 dark:hover:border-gray-700 transition-colors">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">B.Com (Accounting & Finance)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">Develop expertise in financial analysis, taxation, and corporate accounting for a dynamic career.</p>
            <button onClick={handleLinkClick} className="bg-gray-50 dark:bg-gray-950 text-blue-900 dark:text-gray-300 border border-gray-200 dark:border-gray-800 font-bold text-xs py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-auto text-center tracking-wider w-full">LEARN MORE</button>
          </div>
        </div>
        </div>
      </FadeInSection>
    </section>
  );
}
