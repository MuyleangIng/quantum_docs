import React from 'react';
import { Cloud, Zap } from 'lucide-react';

// Custom Logo Component
const CloudinatorLogo = () => {
  return (
    <div className={`flex items-center gap-2`}>
      <div className="relative">
        <Cloud className="w-6 h-6 text-blue-500" />
        <Zap className="w-3 h-3 text-yellow-400 absolute -bottom-1 -right-1" />
      </div>
      <span className="font-bold text-lg bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
        Cloudinator
      </span>
    </div>
  );
};

export default CloudinatorLogo;
