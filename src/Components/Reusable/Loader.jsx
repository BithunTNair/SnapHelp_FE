import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="flex flex-col items-center">
      <span className="loader-spinner mb-4" />
      <span className="text-white text-lg font-semibold drop-shadow">Loading...</span>
    </div>
    <style>{`
      .loader-spinner {
        width: 56px;
        height: 56px;
        border: 6px solid rgba(255,255,255,0.2);
        border-top: 6px solid #38bdf8;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        box-shadow: 0 0 24px #38bdf844;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader;