"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-indigo-400">Muhammad Umar</span>
            </h1>
          </motion.div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A passionate developer creating amazing web experiences with Next.js and Tailwind CSS.
          </p>

          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-medium transition-all"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
