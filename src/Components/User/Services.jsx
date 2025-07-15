

import React from 'react';
import Navbar from '../Reusable/Navbar';




const Services = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="min-h-screen pt-24 pb-10 px-2 sm:px-6 bg-[var(--primary-light)] flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-8 text-center">Available Services</h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div key={''} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-[var(--primary-light)] hover:shadow-2xl transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-[var(--primary)]">{''}</span>
                <span className='px-3 py-1 rounded-full text-xs font-bold'> </span>
              </div>
              <div className="text-[var(--text-dark)] text-base mb-1">
                <span className="font-medium">Provider:</span> {''}
              </div>
              <div className="text-[var(--text-light)] text-base mb-1">
                <span className="font-medium">Rate:</span> ₹{''}
              </div>
             
              <button className="mt-4 w-full py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-base shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 disabled:opacity-60">
                {''}
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Services;