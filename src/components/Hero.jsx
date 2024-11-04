import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Add particle animation here */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-emerald-950 opacity-90" />
        </div>
      </div>

      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 glitch-text">
          Making the World Safer
        </h1>
        <p className="text-emerald-400 text-xl md:text-2xl mb-8">
          Professional Security Solutions for a Secure Tomorrow
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-emerald-600 text-white rounded-lg 
                     hover:bg-emerald-500 transition-all duration-300
                     shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero; 