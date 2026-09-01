import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the admission requirements for the BCA program?",
      answer: "Applicants must have completed their 10+2 education from a recognized board with a minimum aggregate of 50%. Mathematics or Computer Science as a subject in 10+2 is highly recommended."
    },
    {
      question: "How do I apply for the upcoming fall semester?",
      answer: "You can apply through our online admissions portal. Click the 'Apply Now' button in the navigation bar to start your application process. Make sure to have your transcripts ready."
    },
    {
      question: "Are there any scholarships or financial aid options available?",
      answer: "Yes, we offer several merit-based and need-based scholarships as part of our public-private partnership initiative. Detailed criteria can be found in the Financial Aid section of the student portal."
    },
    {
      question: "Can I schedule a campus tour before applying?",
      answer: "Absolutely! We conduct guided campus tours every Tuesday and Thursday. Please contact the admissions office via email or phone to book your slot."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Page under construction' }));
  };

  return (
    <section id="faq" className="p-4 md:p-6 pt-0 overflow-hidden">
      <FadeInSection>
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center mb-8 gap-4 text-center">
            <h3 className="text-blue-900 dark:text-blue-300 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
              <div className="w-1 h-4 bg-red-700 dark:bg-red-600"></div>PROSPECTIVE STUDENTS FAQ
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
              Find quick answers to common questions about admissions, programs, and campus life.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-blue-900 dark:text-blue-400' : ''}`}
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 transition-colors">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button onClick={handleLinkClick} className="bg-transparent border border-blue-900 dark:border-gray-400 text-blue-900 dark:text-gray-300 font-bold text-xs py-3 px-6 rounded-full hover:bg-blue-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all uppercase tracking-wider">
              Still have questions? Contact Admissions
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
