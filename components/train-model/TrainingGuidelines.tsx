"use client";
import { motion } from "framer-motion";
import React from "react";
import { Camera, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const TrainingGuidelines = () => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-lime-900/30 to-black/40 rounded-xl border border-lime-500/30 overflow-hidden p-6 shadow-lg">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-lime-500/10 rounded-full blur-2xl" />
        <h2 className="text-2xl font-bold mb-6 text-lime-200 relative z-10">
          Training Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-5 border-l-4 border-lime-500 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-lime-400" />
              <h3 className="text-lg font-semibold text-lime-200">
                Image Requirements
              </h3>
            </div>
            <ul className="space-y-3 pl-3">
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  High quality, clear images (1:1 aspect ratio recommended)
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  Single person per image for best results
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  Well-lit, professional photos with good resolution
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-5 border-l-4 border-lime-500 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-lime-400" />
              <h3 className="text-lg font-semibold text-lime-200">
                Training Process
              </h3>
            </div>
            <ul className="space-y-3 pl-3">
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  10-15 images per model for optimal training
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  Maximum file size: 45MB
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-lime-300">
                  Training time: approximately 30 minutes
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black/20 backdrop-blur-sm rounded-xl border border-lime-500/20 p-6 hover:border-lime-500/40 transition-all duration-300 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-lime-400" />
            <h3 className="text-lg font-semibold text-lime-200">
              Best Practices
            </h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-lime-900/40 w-6 h-6 mt-0.5 text-lime-300 text-xs font-bold">
                1
              </div>
              <span className="text-sm text-lime-300">
                Use consistent lighting across all images
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-lime-900/40 w-6 h-6 mt-0.5 text-lime-300 text-xs font-bold">
                2
              </div>
              <span className="text-sm text-lime-300">
                Include various angles and expressions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-lime-900/40 w-6 h-6 mt-0.5 text-lime-300 text-xs font-bold">
                3
              </div>
              <span className="text-sm text-lime-300">
                Avoid group photos or complex backgrounds
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Common Issues to Avoid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black/20 backdrop-blur-sm rounded-xl border border-lime-500/20 p-6 hover:border-lime-500/40 transition-all duration-300 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-semibold text-lime-200">
              Common Issues to Avoid
            </h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-amber-900/40 w-6 h-6 mt-0.5 text-amber-300 text-xs font-bold">
                !
              </div>
              <span className="text-sm text-lime-300">
                Blurry or low-resolution images
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-amber-900/40 w-6 h-6 mt-0.5 text-amber-300 text-xs font-bold">
                !
              </div>
              <span className="text-sm text-lime-300">
                Multiple people in the same image
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center rounded-full bg-amber-900/40 w-6 h-6 mt-0.5 text-amber-300 text-xs font-bold">
                !
              </div>
              <span className="text-sm text-lime-300">
                Inconsistent lighting or backgrounds
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingGuidelines;
