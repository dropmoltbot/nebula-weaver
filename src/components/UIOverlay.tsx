
'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Infinity } from 'lucide-react';

export default function UIOverlay() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 p-8"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              NEBULA WEAVER
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-4"
          >
            <Star className="w-5 h-5 text-purple-400 animate-pulse" />
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Infinity className="w-5 h-5 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </motion.header>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center pointer-events-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-purple-300 to-pink-300"
          >
            BREATHE THE STARS
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto"
          >
            An interactive cosmic particle experience
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-lg font-mono text-cyan-300 hover:bg-cyan-500/30 transition"
            >
              EXPLORE
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-lg font-mono text-purple-300 hover:bg-purple-500/30 transition"
            >
              DISCOVER
            </motion.button>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 p-6 text-center"
      >
        <p className="text-sm text-gray-500 font-mono">
          MOVE YOUR CURSOR TO INTERACT • GENERATED WITH THREE.JS
        </p>
      </motion.footer>
    </div>
  );
}
