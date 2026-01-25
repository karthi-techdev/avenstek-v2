"use client";

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  text?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ text }) => {
  const [loadingText, setLoadingText] = useState(text || "Initializing");
  
  const catchyTexts = [
    "Brewing",
    "Grinding",
    "Calibrating",
    "Synthesizing",
    "Connecting",
    "Simulating",
    "Deploying",
    "Optimizing",
    "Polishing",
    "Encrypting",
    "Mapping",
    "Processing"
  ];

  useEffect(() => {
    if (text) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(catchyTexts[index % catchyTexts.length]);
      index++;
    }, 1200); // Faster rotation for dynamic feel
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/30 backdrop-blur-[30px] transition-all duration-700 animate-in fade-in">
      
      {/* Sleek Minimalist Spinner */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer Minimal Ring */}
        <div className="w-16 h-16 border-[1.5px] border-[var(--color-7)]/10 rounded-full absolute"></div>
        
        {/* The Moving Accent */}
        <div className="w-16 h-16 border-[1.5px] border-t-[var(--color-7)] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Central Core Point */}
        <div className="w-1 h-1 bg-[var(--color-7)] rounded-full shadow-[0_0_10px_var(--color-7)] animate-pulse"></div>
      </div>
      
      {/* Dynamic Narrative Typography */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center">
          <h3 className="text-[12px] font-black uppercase tracking-[0.6em] text-[var(--color-16)] animate-pulse pl-1">
            {loadingText}
          </h3>
          
          <div className="mt-4 flex gap-1.5 items-center justify-center opacity-40">
            <div className="w-1 h-1 bg-[var(--color-7)] rounded-full animate-[bounce_1s_infinite_0s]"></div>
            <div className="w-1 h-1 bg-[var(--color-7)] rounded-full animate-[bounce_1s_infinite_0.1s]"></div>
            <div className="w-1 h-1 bg-[var(--color-7)] rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
