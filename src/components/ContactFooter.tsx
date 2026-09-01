import React from 'react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export default function ContactFooter() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <footer className="flex flex-col">
      <div className="p-4 md:p-6 pb-0">
        <div className="bg-blue-900 dark:bg-gray-900 rounded-3xl p-8 md:p-12 text-white max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 shadow-sm border border-transparent dark:border-gray-800 relative overflow-hidden transition-colors">
          
          {/* Brand & About */}
          <div className="md:col-span-5 relative z-10">
            <h3 className="text-blue-200 dark:text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">ABOUT INITIATIVE</h3>
            <p className="text-sm leading-relaxed max-w-md opacity-90 text-blue-50 dark:text-gray-300">
              Empowering the next generation through a synergistic public-private partnership. We focus on modern web standards, accessibility, and interactive digital infrastructure for the campus community.
            </p>
            <div className="flex gap-2 mt-6">
              <div onClick={handleLinkClick} className="w-10 h-10 rounded-xl bg-blue-800 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-blue-700 dark:border-gray-700 hover:bg-blue-700 dark:hover:bg-gray-700 cursor-pointer transition-colors">FB</div>
              <div onClick={handleLinkClick} className="w-10 h-10 rounded-xl bg-blue-800 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-blue-700 dark:border-gray-700 hover:bg-blue-700 dark:hover:bg-gray-700 cursor-pointer transition-colors">IG</div>
              <div onClick={handleLinkClick} className="w-10 h-10 rounded-xl bg-blue-800 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-blue-700 dark:border-gray-700 hover:bg-blue-700 dark:hover:bg-gray-700 cursor-pointer transition-colors">LI</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 relative z-10">
            <h3 className="text-blue-200 dark:text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white dark:hover:text-gray-100 text-blue-50 dark:text-gray-300 transition-colors flex items-center gap-2">About the Initiative</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white dark:hover:text-gray-100 text-blue-50 dark:text-gray-300 transition-colors flex items-center gap-2">Academic Departments</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white dark:hover:text-gray-100 text-blue-50 dark:text-gray-300 transition-colors flex items-center gap-2">Admissions</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white dark:hover:text-gray-100 text-blue-50 dark:text-gray-300 transition-colors flex items-center gap-2">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3 relative z-10">
            <h3 className="text-blue-200 dark:text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">CONNECT WITH US</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-blue-300 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Admissions Line</p>
                <p className="text-sm font-medium dark:text-gray-200">+1 000-000-0000</p>
              </div>
              <div>
                <p className="text-[10px] text-blue-300 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Inquiry Email</p>
                <p className="text-sm font-medium underline underline-offset-4 decoration-blue-700 dark:decoration-gray-600 dark:text-gray-200">example@college.edu</p>
              </div>
              <div>
                <p className="text-[10px] text-blue-300 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1 mt-3">Address</p>
                <p className="text-sm font-medium dark:text-gray-200">123 Campus Road,<br/>Siliguri, West Bengal</p>
              </div>
              <div className="pt-4 border-t border-blue-800 dark:border-gray-800 mt-2">
                 <p className="text-[10px] text-blue-300 dark:text-gray-500 font-semibold uppercase tracking-wider mb-2">Office Hours</p>
                 <p className="text-[11px] leading-relaxed text-blue-100 dark:text-gray-400">Mon — Fri: 08:00 AM - 05:00 PM<br/>Sat — Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Supported By Banner */}
      <div className="bg-red-700 dark:bg-red-900 text-white py-3 px-4 mt-6 flex justify-center items-center gap-2 shadow-inner transition-colors">
        <span className="text-[10px] font-black uppercase tracking-widest bg-red-800 dark:bg-red-950 px-2 py-1 rounded">SUPPORTED BY</span>
        <span className="text-xs font-semibold tracking-wide">Global Tech Alliance & State Education Board (A Public-Private Partnership)</span>
      </div>

      <div className="h-20 md:h-12 bg-transparent dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between shrink-0 gap-3 transition-colors">
        <p className="text-[10px] text-gray-500 dark:text-gray-500 font-bold uppercase tracking-wider">&copy; {new Date().getFullYear()} Apex Valley College. All Rights Reserved.</p>
        <div className="flex gap-4 text-[10px] font-bold text-blue-900 dark:text-gray-400 uppercase tracking-wider">
          <span className="cursor-pointer hover:text-red-700 dark:hover:text-red-500 transition-colors" onClick={handleLinkClick}>Privacy Policy</span>
          <span className="cursor-pointer hover:text-red-700 dark:hover:text-red-500 transition-colors" onClick={handleLinkClick}>Terms of Service</span>
          <span className="cursor-pointer hover:text-red-700 dark:hover:text-red-500 transition-colors" onClick={handleLinkClick}>Accreditation</span>
        </div>
      </div>
    </footer>
  );
}
