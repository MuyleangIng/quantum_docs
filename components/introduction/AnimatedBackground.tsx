import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float-fast" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Moving Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 bg-primary/20 rounded-full
              animate-particle-${i % 3}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
};

// Add these styles to your globals.css or tailwind config
const style = `
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
  
  @keyframes float-medium {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-15px, 15px); }
  }
  
  @keyframes float-fast {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(10px, 10px); }
  }
  
  @keyframes particle {
    0% { transform: translate(0, 0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translate(100px, -100px); opacity: 0; }
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
  }
  
  .animate-float-fast {
    animation: float-fast 4s ease-in-out infinite;
  }
  
  .animate-particle-0 {
    animation: particle 10s linear infinite;
  }
  
  .animate-particle-1 {
    animation: particle 8s linear infinite;
  }
  
  .animate-particle-2 {
    animation: particle 6s linear infinite;
  }
`;

export default AnimatedBackground;