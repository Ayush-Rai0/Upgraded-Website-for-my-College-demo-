import React from 'react';

export default function Hero() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="home" className="p-4 md:p-6 pb-0">
      <div className="rounded-3xl bg-blue-900/5 dark:bg-gray-800/40 border border-blue-900/10 dark:border-gray-700 p-8 md:p-12 lg:p-16 flex flex-col justify-end relative overflow-hidden shadow-sm min-h-[500px] transition-colors">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 dark:from-gray-950/90 to-blue-900/40 dark:to-gray-900/40 z-10 transition-colors"></div>
        <div className="absolute top-6 right-6 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 text-right hidden sm:block transition-colors">
          <p className="text-[10px] font-bold text-red-700 dark:text-red-500 uppercase leading-none mb-1">Public-Private</p>
          <p className="text-[12px] font-bold text-blue-900 dark:text-blue-300">Partnership Initiative</p>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-4 max-w-4xl tracking-tight">
            MODERNIZING THE<br/>DIGITAL FRONT<br className="md:hidden"/> OF EDUCATION
          </h2>
          <p className="text-blue-100 dark:text-gray-300 text-sm max-w-md leading-relaxed opacity-90 mb-8">
            Experience a faster, more accessible, and interactive platform. A student-led initiative upgrading our standards for the campus community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleLinkClick} className="bg-red-700 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xs transition-all shadow-md w-full sm:w-auto text-center tracking-wider">
              EXPLORE PROGRAMS
            </button>
            <button onClick={handleLinkClick} className="bg-transparent border border-white dark:border-gray-400 hover:bg-white dark:hover:bg-gray-200 hover:text-blue-900 dark:hover:text-gray-900 text-white dark:text-gray-200 px-8 py-4 rounded-full font-bold text-xs transition-all w-full sm:w-auto text-center tracking-wider">
              APPLY FOR ADMISSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
