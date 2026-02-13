"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

export default function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
        >
          <div className="max-w-7xl mx-auto py-3 px-4 sm:py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-white animate-pulse" />
                <p className="font-medium text-white">
                  Our website is currently in beta. We'd love to hear your
                  feedback!
                </p>
              </div>
              <button
                onClick={handleClose}
                className="ml-6 p-1.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close banner"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent animate-pulse opacity-5" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
