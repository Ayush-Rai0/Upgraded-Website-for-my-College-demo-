import React, { useState } from 'react';
import { Calendar, FileText, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', program: '' });
      window.dispatchEvent(new CustomEvent('show-alert', { detail: 'Application submitted successfully! Our admissions team will contact you soon.' }));
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-950 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-900 dark:bg-gray-900 py-20 px-6 border-b-8 border-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Admissions & Enrollment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Take the next step in your educational journey. Join a community dedicated to academic excellence, innovation, and leadership.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Admission Guidelines */}
          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-red-700" size={28} />
              Application Process
            </h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Submit Online Application', desc: 'Fill out the digital inquiry form below to initiate your application process.' },
                { step: '02', title: 'Document Verification', desc: 'Upload or submit physical copies of all required academic and identity documents.' },
                { step: '03', title: 'Entrance Examination / Interview', desc: 'Depending on your program, complete the mandatory entrance test or personal interview.' },
                { step: '04', title: 'Merit List & Enrollment', desc: 'Check the published merit list and complete fee payment to secure your seat.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 font-bold rounded-xl flex items-center justify-center border border-blue-100 dark:border-blue-800 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Dates Table */}
          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Calendar className="text-red-700" size={28} />
              Important Dates & Deadlines
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-800">
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Event</th>
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Date</th>
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Application Start Date</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">October 15, 2026</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">10:00 AM</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Last Date to Apply</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">November 30, 2026</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">11:59 PM</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Document Verification</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">December 5 - 10, 2026</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">09:00 AM - 04:00 PM</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Merit List Publication</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">December 15, 2026</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">02:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Documents Required Table */}
          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="text-red-700" size={28} />
              Documents Required
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-800">
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Document Name</th>
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Required Format</th>
                    <th className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">10th & 12th Marksheets</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Original + 2 Photocopies</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Self-attested photocopies required</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Transfer Certificate (TC)</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Original Only</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">From the last institution attended</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Government ID Proof</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Photocopy</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Aadhar, Passport, or Voter ID</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-gray-300">Passport Photos</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">4 Copies</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">Recent, white background</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-1">
          <div className="bg-blue-900 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden sticky top-32 border border-blue-800 dark:border-gray-800">
            <div className="bg-red-700 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Begin Application
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-blue-100 dark:text-gray-300 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-blue-950/50 dark:bg-gray-950/50 border border-blue-800 dark:border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 dark:text-gray-300 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-blue-950/50 dark:bg-gray-950/50 border border-blue-800 dark:border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-blue-100 dark:text-gray-300 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-blue-950/50 dark:bg-gray-950/50 border border-blue-800 dark:border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-blue-100 dark:text-gray-300 mb-1.5">Program of Interest</label>
                <select 
                  id="program" 
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full bg-blue-950/50 dark:bg-gray-950/50 border border-blue-800 dark:border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow appearance-none"
                >
                  <option value="" disabled>Select a program</option>
                  <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                  <option value="BBA">Bachelor of Business Administration (BBA)</option>
                  <option value="BCOM">B.Com (Accounting & Finance)</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitted}
                className="w-full mt-4 bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  'Processing...'
                ) : (
                  <>
                    Submit Inquiry <Send size={18} />
                  </>
                )}
              </button>
              
              <p className="text-xs text-blue-200/70 dark:text-gray-400 text-center mt-4">
                By submitting, you agree to our privacy policy and consent to be contacted regarding admissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
