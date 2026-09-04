import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AcademicItem {
  id: string;
  title: string;
  acronym?: string;
  type: 'degree' | 'course';
  tags: string[];
}

const ACADEMIC_ITEMS: AcademicItem[] = [
  // Degrees & Major Programs
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    acronym: "BCA",
    type: "degree",
    tags: ["degree", "program", "undergraduate", "bachelor", "cs", "computer", "it", "coding", "software", "development"]
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    acronym: "BBA",
    type: "degree",
    tags: ["degree", "program", "undergraduate", "bachelor", "business", "management", "corporate"]
  },
  {
    id: "bcom",
    title: "B.Com (Accounting & Finance)",
    acronym: "BCOM",
    type: "degree",
    tags: ["degree", "program", "undergraduate", "bachelor", "commerce", "accounting", "finance"]
  },
  // Academic Modules / Courses
  {
    id: "cs101",
    title: "Introduction to Computer Science",
    type: "course",
    tags: ["course", "programming", "tech", "computer", "software"]
  },
  {
    id: "calc",
    title: "Advanced Calculus",
    type: "course",
    tags: ["course", "math", "mathematics"]
  },
  {
    id: "dsa",
    title: "Data Structures and Algorithms",
    type: "course",
    tags: ["course", "programming", "algorithms", "tech", "bca"]
  },
  {
    id: "cyber",
    title: "Cybersecurity Principles",
    type: "course",
    tags: ["course", "tech", "security", "bca", "networks"]
  },
  {
    id: "webdev",
    title: "Web Technologies & Development",
    type: "course",
    tags: ["course", "programming", "web", "frontend", "backend", "bca"]
  },
  {
    id: "dbms",
    title: "Database Management Systems",
    type: "course",
    tags: ["course", "database", "sql", "tech", "bca"]
  },
  {
    id: "finance",
    title: "Financial Accounting",
    type: "course",
    tags: ["course", "business", "accounting", "finance", "commerce"]
  }
];

const SYNONYM_MAP: Record<string, string[]> = {
  "bca": ["bca", "bachelor of computer applications"],
  "bba": ["bba", "bachelor of business administration"],
  "degree": ["degree", "bachelor", "undergraduate", "program"],
  "degrees": ["degree", "bachelor", "undergraduate", "program"],
  "program": ["program", "degree"],
  "programs": ["program", "degree"],
  "courses": ["course"],
  "curriculum": ["program", "course", "degree"],
  "math": ["calculus", "algebra", "mathematics"],
  "programming": ["computer", "algorithms", "software", "coding", "webdev"],
  "coding": ["programming", "computer", "bca", "software"],
  "tech": ["computer", "cybersecurity", "technology", "bca"]
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<AcademicItem[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const searchContainerRefDesktop = useRef<HTMLFormElement>(null);
  const searchContainerRefMobile = useRef<HTMLFormElement>(null);

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
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && mediaQuery.matches);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

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
      const scrollPosition = window.scrollY + 100;
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        searchContainerRefDesktop.current && !searchContainerRefDesktop.current.contains(target) &&
        searchContainerRefMobile.current && !searchContainerRefMobile.current.contains(target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Multi-field search & synonym resolution
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setFilteredSuggestions([]);
      return;
    }

    // Collect related keywords via synonyms
    const targetTerms = new Set<string>([query]);
    for (const [key, relatedWords] of Object.entries(SYNONYM_MAP)) {
      if (key === query || query.includes(key) || key.includes(query)) {
        relatedWords.forEach(w => targetTerms.add(w.toLowerCase()));
      }
    }

    const matchedItems = ACADEMIC_ITEMS.filter(item => {
      const titleLower = item.title.toLowerCase();
      const acronymLower = item.acronym?.toLowerCase() || '';
      const tags = item.tags;

      return Array.from(targetTerms).some(term => 
        titleLower.includes(term) ||
        acronymLower.includes(term) ||
        tags.some(tag => tag.includes(term) || term.includes(tag))
      );
    });

    setFilteredSuggestions(matchedItems);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
    setActiveSuggestionIndex(-1);
  };

  const selectSuggestion = (item: AcademicItem) => {
    setSearchQuery(item.title);
    setShowSuggestions(false);
    setIsOpen(false);

    // Smooth scroll to the courses/programs section
    window.dispatchEvent(new CustomEvent('trigger-loading', { detail: 'courses' }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      if (e.key === 'ArrowDown') setShowSuggestions(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredSuggestions.length) {
        e.preventDefault();
        selectSuggestion(filteredSuggestions[activeSuggestionIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

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
    if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredSuggestions.length) {
      selectSuggestion(filteredSuggestions[activeSuggestionIndex]);
      return;
    }

    const query = searchQuery.trim();
    if (!query) return;

    if (filteredSuggestions.length > 0) {
      selectSuggestion(filteredSuggestions[0]);
    } else {
      window.dispatchEvent(new CustomEvent('show-alert', { detail: `No results found for '${query}'` }));
    }
  };

  const renderSuggestions = () => (
    <AnimatePresence>
      {showSuggestions && searchQuery.trim().length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 max-h-72 overflow-y-auto"
        >
          {filteredSuggestions.length > 0 ? (
            <ul className="py-1 divide-y divide-gray-100 dark:divide-gray-700/50">
              {filteredSuggestions.map((item, index) => (
                <li
                  key={item.id}
                  className={`px-4 py-3 cursor-pointer transition-colors flex flex-col gap-0.5 ${
                    index === activeSuggestionIndex
                      ? 'bg-blue-50 dark:bg-gray-700 text-blue-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                  onClick={() => selectSuggestion(item)}
                  onMouseEnter={() => setActiveSuggestionIndex(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">{item.title}</span>
                    <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">
                      {item.type}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-xs text-gray-500 dark:text-gray-400">
              No exact matches. Try searching <span className="font-semibold text-blue-600 dark:text-blue-400">"BCA"</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">"Degree"</span>, or <span className="font-semibold text-blue-600 dark:text-blue-400">"Courses"</span>.
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

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

            <form ref={searchContainerRefDesktop} onSubmit={handleSearchSubmit} className="relative ml-2 flex items-center">
              <input
                type="text"
                placeholder="Search BCA, degrees..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
                className="bg-blue-950 dark:bg-gray-950 text-white text-xs rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-red-700 dark:focus:ring-red-600 border border-blue-800 dark:border-gray-800 placeholder-blue-300 dark:placeholder-gray-500 w-52 transition-all"
              />
              <button type="submit" className="absolute right-2 text-blue-300 dark:text-gray-400 hover:text-white dark:hover:text-white" aria-label="Search">
                <Search size={16} />
              </button>
              {renderSuggestions()}
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

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className="text-white p-2 hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Search mobile"
              onClick={() => {
                setIsOpen(true);
                setTimeout(() => {
                  document.getElementById('mobile-search-input')?.focus();
                }, 100);
              }}
            >
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-blue-950/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-blue-800 dark:border-gray-800 overflow-hidden absolute w-full left-0 top-full shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
                <form ref={searchContainerRefMobile} onSubmit={handleSearchSubmit} className="mb-4 relative">
                  <input
                    id="mobile-search-input"
                    type="text"
                    placeholder="Search BCA, degrees..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
                    className="bg-blue-900 dark:bg-gray-800 w-full text-white text-sm rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-red-700 dark:focus:ring-red-600 border border-blue-800 dark:border-gray-700 placeholder-blue-300 dark:placeholder-gray-500 transition-colors"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 dark:text-gray-400 hover:text-white dark:hover:text-white" aria-label="Search">
                    <Search size={20} />
                  </button>
                  {renderSuggestions()}
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