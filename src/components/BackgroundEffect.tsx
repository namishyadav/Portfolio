import React from 'react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle background grid with shimmer */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-shimmer" />

      {/* Top subtle cyan/indigo glow — slowly drifting */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] animate-ambient-glow-1"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(99,102,241,0.2) 60%, transparent 80%)'
        }}
      />

      {/* Mid subtle accent glow — slow drift */}
      <div 
        className="absolute top-[45%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[160px] animate-ambient-glow-2"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Bottom subtle accent glow — slow drift */}
      <div 
        className="absolute top-[75%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] animate-ambient-glow-3"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)'
        }}
      />
    </div>
  );
};
