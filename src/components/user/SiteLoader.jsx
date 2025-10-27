

import React from 'react';

const SiteLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Tailwind Spinner using your accent color */}
      <div 
        className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-600"
      ></div>
      <p className="mt-6 text-xl text-gray-700 font-semibold">Loading Site Resources...</p>
      
      {/* You can optionally add your logo here */}
      <img src="/logo.png" alt="Company Logo" className="w-24 h-auto mt-4" />
    </div>
  );
};

export default SiteLoader;