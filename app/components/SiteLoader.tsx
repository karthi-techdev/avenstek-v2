"use client";

import React from 'react';

const SiteLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white/40 backdrop-blur-xl transition-all duration-300">
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring */}
        <div className="w-12 h-12 border-[2px] border-[var(--color-7)]/10 rounded-full absolute"></div>
        
        {/* Primary spinner */}
        <div className="w-12 h-12 border-[2px] border-t-[var(--color-7)] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Pulsing center point */}
        <div className="w-1.5 h-1.5 bg-[var(--color-7)] rounded-full shadow-[0_0_12px_var(--color-7)] animate-pulse"></div>
      </div>
      
      <p className="mt-4 text-[10px] font-bold tracking-[0.2em] text-[var(--color-15)] animate-pulse">
        Loading
      </p>
    </div>
  );
};

export default SiteLoader;
