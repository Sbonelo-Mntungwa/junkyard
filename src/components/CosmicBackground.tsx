'use client';

import { useEffect, useRef } from 'react';

interface CosmicBackgroundProps {
  starCount?: number;
  shootingStarInterval?: number;
}

export default function CosmicBackground({ 
  starCount = 150, 
  shootingStarInterval = 3000 
}: CosmicBackgroundProps) {
  const starfieldRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starfieldRef.current) {
      starfieldRef.current.innerHTML = '';
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const baseOpacity = Math.random() * 0.5 + 0.2;
        star.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}%;
          top: ${y}%;
          background: white;
          border-radius: 50%;
          animation: twinkle ${duration}s ease-in-out infinite;
          opacity: ${baseOpacity};
          animation-delay: ${Math.random() * duration}s;
        `;
        starfieldRef.current.appendChild(star);
      }
    }

    const createShootingStar = () => {
      if (!shootingStarsRef.current) return;
      
      const shootingStar = document.createElement('div');
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      const angle = Math.random() * 30 + 15;
      const duration = Math.random() * 1 + 0.5;
      
      shootingStar.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: ${startY}%;
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, rgba(222, 26, 88, 0), rgba(222, 26, 88, 1), rgba(143, 1, 119, 1));
        border-radius: 50%;
        transform: rotate(${angle}deg);
        animation: shootingStar ${duration}s ease-out forwards;
        box-shadow: 0 0 10px rgba(222, 26, 88, 0.8), 0 0 20px rgba(143, 1, 119, 0.5);
      `;
      
      shootingStarsRef.current.appendChild(shootingStar);
      
      setTimeout(() => {
        shootingStar.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createShootingStar, shootingStarInterval);
    
    return () => clearInterval(interval);
  }, [starCount, shootingStarInterval]);

  return (
    <>
      <div 
        ref={starfieldRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div 
        ref={shootingStarsRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden'
        }}
      />
      
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(143, 1, 119, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(222, 26, 88, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(107, 33, 168, 0.06) 0%, transparent 40%)
          `,
          animation: 'nebulaDrift 60s ease-in-out infinite'
        }}
      />
      
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1000,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </>
  );
}
