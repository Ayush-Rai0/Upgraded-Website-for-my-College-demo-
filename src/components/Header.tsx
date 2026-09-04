import React, { useState, useEffect } from 'react';
import { Menu, X, AlertCircle, Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'faq', label: 'FAQ' }
  ];
  
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initial setup
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && mediaQuery.matches);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      let currentActive = 'home';
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
    if (nextTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('trigger-loading', { detail: id }));
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.dispatchEvent(new CustomEvent('show-alert', { detail: `Page under construction (Search: ${searchQuery})` }));
    }
  };

  return (
    <>
      {/* News Ticker */}
      <div className="bg-red-700 h-8 flex items-center overflow-hidden shrink-0 relative z-20">
        <div className="flex gap-12 text-white text-xs font-medium whitespace-nowrap animate-ticker relative w-full">
          <span className="mx-8 flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>Admissions open for BCA First Year</span>
          <span className="mx-8 flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>New Campus WiFi Infrastructure Deployed</span>
          <span className="mx-8 flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>Semester Results available in the Portal</span>
          <span className="mx-8 flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>Public-Private Partnership Summit scheduled for next week</span>
        </div>
      </div>

      <header className="bg-blue-900/85 dark:bg-gray-900/85 backdrop-blur-md h-24 px-4 sm:px-8 flex items-center justify-between border-b-4 border-red-700 dark:border-red-600 shadow-lg sticky top-0 z-50 shrink-0 transition-colors">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-full">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={handleLinkClick}>
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 shadow-inner transition-colors overflow-hidden p-2">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231e3a8a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z'/%3E%3C/svg%3E"
                alt="College Emblem" 
                className="w-full h-full object-contain dark:grayscale dark:brightness-200"
              />
            </div>
            <div>
              <h1 className="text-white font-extrabold text-xl tracking-tight leading-none">
                Apex Valley<br/>College
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 items-center">
            <div className="flex gap-6 text-white text-xs font-medium uppercase tracking-tighter">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)} 
                  className={`${activeSection === item.id ? 'border-b border-white opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <form onSubmit={handleSearchSubmit} className="relative ml-2 flex items-center">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-blue-950 dark:bg-gray-950 text-white text-xs rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-red-700 dark:focus:ring-red-600 border border-blue-800 dark:border-gray-800 placeholder-blue-300 dark:placeholder-gray-500 w-48 transition-all"
              />
              <button type="submit" className="absolute right-2 text-blue-300 dark:text-gray-400 hover:text-white dark:hover:text-white" aria-label="Search">
                <Search size={16} />
              </button>
            </form>

            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors" 
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={handleLinkClick} className="bg-red-700 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md ml-2">
              APPLY NOW
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center" 
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors" aria-label="Search mobile" onClick={handleLinkClick}>
              <Search size={24} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-blue-950/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-blue-800 dark:border-gray-800 overflow-hidden absolute w-full left-0 top-full shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="mb-4 relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-blue-900 dark:bg-gray-800 w-full text-white text-sm rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-red-700 dark:focus:ring-red-600 border border-blue-800 dark:border-gray-700 placeholder-blue-300 dark:placeholder-gray-500 transition-colors"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 dark:text-gray-400 hover:text-white dark:hover:text-white" aria-label="Search">
                    <Search size={20} />
                  </button>
                </form>

                {navItems.map(item => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)} 
                    className={`block px-4 py-3 rounded-lg text-sm font-bold transition-colors uppercase tracking-wider ${activeSection === item.id ? 'bg-blue-800 dark:bg-gray-800 text-white' : 'text-blue-100 dark:text-gray-300 hover:bg-blue-800 dark:hover:bg-gray-800 hover:text-white'}`}
                  >
                    {item.label}
                  </a>
                ))}
                
                <button onClick={handleLinkClick} className="w-full mt-2 bg-red-700 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-700 text-white px-4 py-3 rounded-lg text-sm font-bold transition-all shadow-md uppercase tracking-wider">
                  APPLY NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
