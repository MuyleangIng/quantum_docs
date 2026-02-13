import React from "react";

export const GridPattern: React.FC = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 40V0H40"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);
