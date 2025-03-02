"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Coffee } from 'lucide-react';

const Loading = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    // Create smoke particles
    const smokeTimeline = gsap.timeline({ repeat: -1 });
    
    // Animate each smoke path
    gsap.utils.toArray<HTMLElement>('.smoke-path').forEach((path, index) => {
      // Initial state
      gsap.set(path as HTMLElement, {
        y: 0,
        opacity: 0,
        scale: 0.5
      });
      
      // Create individual timeline for each smoke path
      smokeTimeline.to(path, {
        y: -80,
        opacity: index % 2 === 0 ? 0.7 : 0.5,
        scale: 1.5,
        duration: 3,
        ease: "power1.out",
        stagger: 0.2
      }, index * 0.4)
      .to(path, {
        y: -120,
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: "power2.out"
      }, `>-2`);
    });
    
    // Animate coffee cup
    gsap.to('.coffee-cup', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    // Pulse animation for the loading text
    gsap.to('.loading-text', {
      opacity: 0.5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
  }, { scope: containerRef });
  
  return (
    <div ref={containerRef} className="min-h-screen bg-amber-950 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        {/* Coffee Cup */}
        <div className="coffee-cup relative z-10 bg-amber-100 p-4 rounded-full">
          <Coffee size={80} className="text-amber-950" />
        </div>
        
        {/* Smoke Particles */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-0 w-20 h-32">
          {/* Multiple smoke paths with different sizes and positions */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              className="smoke-path" 
              d="M30,50 Q40,40 30,30 Q20,20 30,10" 
              fill="none" 
              stroke="rgba(255,255,255,0.7)" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            <path 
              className="smoke-path" 
              d="M50,50 Q60,35 50,25 Q40,15 50,5" 
              fill="none" 
              stroke="rgba(255,255,255,0.6)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              className="smoke-path" 
              d="M70,50 Q80,40 70,30 Q60,20 70,10" 
              fill="none" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            <path 
              className="smoke-path" 
              d="M40,50 Q30,35 40,25 Q50,15 40,5" 
              fill="none" 
              stroke="rgba(255,255,255,0.6)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              className="smoke-path" 
              d="M60,50 Q70,40 60,30 Q50,20 60,10" 
              fill="none" 
              stroke="rgba(255,255,255,0.7)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Loading Text */}
      <h2 className="loading-text text-2xl font-bold text-amber-100 mt-6">
        Brewing...
      </h2>
      
      {/* Loading Dots */}
      <div className="flex mt-4 space-x-2">
        {[0, 1, 2].map((dot, index) => (
          <div 
            key={dot}
            className="w-3 h-3 rounded-full bg-amber-200"
            style={{
              animation: `pulse 1.5s ease-in-out ${index * 0.3}s infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Add keyframes for the dots */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;