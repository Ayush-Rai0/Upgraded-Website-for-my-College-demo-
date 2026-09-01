import React from 'react';
import { Users, UserCog, ArrowRight } from 'lucide-react';

export default function LoginPortal() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="about" className="p-4 md:p-6">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 dark:border-gray-800 max-w-7xl mx-auto transition-colors">
        <h3 className="text-blue-900 dark:text-blue-300 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-red-700 dark:bg-red-600"></div>PORTAL LOGIN
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm max-w-2xl leading-relaxed">
          Direct access to your academic ecosystem. Secure, database-driven login portals for our students and faculty members.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Student Portal */}
          <button onClick={handleLinkClick} className="w-full py-5 bg-blue-900 dark:bg-blue-800 text-white rounded-2xl font-bold text-xs flex justify-between px-6 md:px-8 items-center shadow-md shadow-blue-900/10 dark:shadow-none group transition-transform hover:scale-[1.01]">
            <div className="flex items-center gap-4">
              <Users size={20} className="text-blue-200 dark:text-blue-300" />
              <span className="tracking-widest">STUDENT PORTAL</span>
            </div>
            <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Faculty Portal */}
          <button onClick={handleLinkClick} className="w-full py-5 bg-gray-100 dark:bg-gray-800 text-blue-900 dark:text-gray-200 rounded-2xl font-bold text-xs flex justify-between px-6 md:px-8 items-center border border-gray-200 dark:border-gray-700 group transition-transform hover:scale-[1.01]">
             <div className="flex items-center gap-4">
              <UserCog size={20} className="text-gray-500 dark:text-gray-400" />
              <span className="tracking-widest">FACULTY ACCESS</span>
            </div>
            <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
