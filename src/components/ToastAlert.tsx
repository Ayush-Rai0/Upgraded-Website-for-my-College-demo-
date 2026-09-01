import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ToastAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleShowAlert = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setMessage(customEvent.detail || "Page under construction");
      setIsVisible(true);
      
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('show-alert', handleShowAlert);
    return () => window.removeEventListener('show-alert', handleShowAlert);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          className="fixed top-6 left-1/2 z-[100] bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-gray-800 dark:border-gray-200 min-w-[300px]"
        >
          <AlertTriangle className="text-red-500 dark:text-red-600" size={24} />
          <span className="font-bold text-sm tracking-wide">{message}</span>
          <button onClick={() => setIsVisible(false)} className="ml-auto text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-900 transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
