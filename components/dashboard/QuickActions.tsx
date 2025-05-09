"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { BookOpen, Cpu, Image, Plus } from "lucide-react";
import { motion } from "framer-motion";

const QuickActions = () => {
  return (
    <Card className="flex w-full flex-col bg-gradient-to-br from-black/40 to-black/20 border-lime-500/20 text-white backdrop-blur-sm">
      <CardHeader className="border-b border-lime-500/20">
        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div className="lg:col-span-3 col-span-2 w-full flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
            <Link href="/train-model">
              <div className="bg-black/20 hover:bg-black/30 border border-lime-500/20 rounded-lg p-4 transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="p-2 bg-lime-900/30 rounded-full w-fit mb-3">
                    <Cpu className="w-5 h-5 text-lime-400" />
                  </div>
                  <h3 className="text-lime-200 font-medium mb-2">Train New Model</h3>
                  <p className="text-lime-300/70 text-sm flex-grow">
                    Create your own custom AI model using your images
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
            <Link href="/generate-image">
              <div className="bg-black/20 hover:bg-black/30 border border-lime-500/20 rounded-lg p-4 transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="p-2 bg-lime-900/30 rounded-full w-fit mb-3">
                    <Image className="w-5 h-5 text-lime-400" />
                  </div>
                  <h3 className="text-lime-200 font-medium mb-2">Generate Image</h3>
                  <p className="text-lime-300/70 text-sm flex-grow">
                    Create images using your trained models
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
            <Link href="/models">
              <div className="bg-black/20 hover:bg-black/30 border border-lime-500/20 rounded-lg p-4 transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="p-2 bg-lime-900/30 rounded-full w-fit mb-3">
                    <Plus className="w-5 h-5 text-lime-400" />
                  </div>
                  <h3 className="text-lime-200 font-medium mb-2">My Models</h3>
                  <p className="text-lime-300/70 text-sm flex-grow">
                    View and manage all your trained models
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
            <Link href="/docs">
              <div className="bg-black/20 hover:bg-black/30 border border-lime-500/20 rounded-lg p-4 transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="p-2 bg-lime-900/30 rounded-full w-fit mb-3">
                    <BookOpen className="w-5 h-5 text-lime-400" />
                  </div>
                  <h3 className="text-lime-200 font-medium mb-2">Documentation</h3>
                  <p className="text-lime-300/70 text-sm flex-grow">
                    Learn how to use the platform effectively
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
