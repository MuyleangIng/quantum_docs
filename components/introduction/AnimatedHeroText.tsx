"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedHeroText: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gray-700 dark:text-gray-300">
          Say Goodbye to{" "}
          <TypeAnimation
            sequence={["Manual", 2000, "Tedious", 2000, "Time-consuming", 2000]}
            wrapper="strong"
            speed={50}
            repeat={Infinity}
            className="text-primary"
          />
        </span>
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        <span className="text-gray-700 dark:text-gray-300">
          Say hello to{" "}
          <TypeAnimation
            sequence={[
              "Automation",
              2000,
              "Efficiency",
              2000,
              "Productivity",
              2000,
            ]}
            wrapper="strong"
            speed={50}
            repeat={Infinity}
            className="text-primary"
          />
        </span>
      </h2>
    </div>
  );
};

export default AnimatedHeroText;
