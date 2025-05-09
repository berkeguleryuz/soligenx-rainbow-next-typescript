"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Layers,
  Cpu,
  Coins,
  ArrowRight,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";

const DocsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent mb-2">
          SociGenX Documentation
        </h1>
        <p className="text-slate-300/90">
          Complete guide to using the SociGenX platform for AI-powered image
          generation and model training
        </p>
      </motion.div>

      {/* Quick Links Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Quick Navigation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="#getting-started">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-indigo-500/20 bg-black/20 hover:bg-black/30 transition-all duration-300">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-200">Getting Started</span>
            </div>
          </Link>
          <Link href="#model-training">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-indigo-500/20 bg-black/20 hover:bg-black/30 transition-all duration-300">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-200">Model Training</span>
            </div>
          </Link>
          <Link href="#tokenomics">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-indigo-500/20 bg-black/20 hover:bg-black/30 transition-all duration-300">
              <Coins className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-200">Tokenomics</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
              Getting Started
            </h2>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6 mb-6">
            <h3 className="text-lg font-medium text-slate-200 mb-3">
              Platform Overview
            </h3>
            <p className="text-slate-300/90 mb-4">
              SociGenX is an AI-powered platform that allows you to create
              personalized AI models and generate unique images based on these
              models. The platform consists of several core features:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-300">
                  Dashboard: Quick overview of your models and recent activities
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-300">
                  Model Training: Create and train new AI models using your own
                  images
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-300">
                  Image Generation: Generate images using your trained models
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6">
              <h3 className="text-lg font-medium text-slate-200 mb-3">
                First Steps
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="flex items-center justify-center rounded-full bg-indigo-900/40 w-5 h-5 mt-0.5 text-indigo-300 text-xs font-bold">
                    1
                  </div>
                  <span className="text-slate-300">
                    Create an account and complete verification
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex items-center justify-center rounded-full bg-indigo-900/40 w-5 h-5 mt-0.5 text-indigo-300 text-xs font-bold">
                    2
                  </div>
                  <span className="text-slate-300">
                    Navigate to the Train Model section to create your first AI
                    model
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex items-center justify-center rounded-full bg-indigo-900/40 w-5 h-5 mt-0.5 text-indigo-300 text-xs font-bold">
                    3
                  </div>
                  <span className="text-slate-300">
                    Once trained, use the Generate Image feature with your model
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="tokenomics" className="mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <Coins className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
              Tokenomics
            </h2>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6">
            <h3 className="text-lg font-medium text-slate-200 mb-4">
              Token Distribution
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2 mb-4">
                <div className="w-full bg-black/30 h-10 rounded-lg overflow-hidden flex">
                  <div className="h-full bg-indigo-500/60 w-[37.5%] flex items-center justify-center text-xs text-white font-medium">
                    37.5%
                  </div>
                  <div className="h-full bg-indigo-600/60 w-[12.5%] flex items-center justify-center text-xs text-white font-medium">
                    12.5%
                  </div>
                  <div className="h-full bg-indigo-700/60 w-[10%] flex items-center justify-center text-xs text-white font-medium">
                    10%
                  </div>
                  <div className="h-full bg-indigo-800/60 w-[5%] flex items-center justify-center text-xs text-white font-medium">
                    5%
                  </div>
                  <div className="h-full bg-indigo-900/60 w-[5%] flex items-center justify-center text-xs text-white font-medium">
                    5%
                  </div>
                  <div className="h-full bg-emerald-700/60 w-[10%] flex items-center justify-center text-xs text-white font-medium">
                    10%
                  </div>
                  <div className="h-full bg-emerald-800/60 w-[10%] flex items-center justify-center text-xs text-white font-medium">
                    10%
                  </div>
                  <div className="h-full bg-emerald-900/60 w-[10%] flex items-center justify-center text-xs text-white font-medium">
                    10%
                  </div>
                </div>
              </div>

              {/* Token Allocation Details */}
              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">Public Sale</h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  37.5% of Fixed Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    Available at Token Generation Event
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">
                  Liquidity Pool
                </h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  12.5% of Fixed Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-600/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    Secures trading liquidity
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">
                  Liquidity & Development
                </h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  10.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-700/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% unlocks at TGE
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">Operational</h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  5.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-800/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% 29-day cliff followed by 60-day unlocks
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">Marketing</h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  5.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-900/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% 61-day unlocks
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">AI Budget</h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  10.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-700/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% 61-day unlocks
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">Treasury</h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  10.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-800/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% 29-day cliff followed by 120-day unlocks
                  </span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-indigo-500/10">
                <h4 className="text-slate-200 font-medium mb-3">
                  Strategic Funds
                </h4>
                <p className="text-slate-300/90 text-sm mb-2">
                  10.0% of Total Supply
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-900/60"></div>
                  <span className="text-slate-300/70 text-xs">
                    100% 120-day unlocks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Model Training Section */}
      <section id="model-training" className="mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
              Model Training
            </h2>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6 mb-6">
            <h3 className="text-lg font-medium text-slate-200 mb-3">
              Training Process Overview
            </h3>
            <p className="text-slate-300/90 mb-4">
              Training your own AI model involves uploading images and letting
              our system process them to create a unique model that can generate
              images in the style or appearance of your uploaded content.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1 flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-indigo-500/10">
                <div className="w-10 h-10 rounded-full bg-indigo-900/40 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-slate-200 font-medium mb-2">
                  Prepare Images
                </h4>
                <p className="text-slate-300/90 text-sm">
                  Gather 10-15 high-quality images with consistent lighting and
                  clear subjects
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-indigo-500/10">
                <div className="w-10 h-10 rounded-full bg-indigo-900/40 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-slate-200 font-medium mb-2">
                  Upload & Configure
                </h4>
                <p className="text-slate-300/90 text-sm">
                  Upload your images as a zip file and configure model
                  parameters
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-indigo-500/10">
                <div className="w-10 h-10 rounded-full bg-indigo-900/40 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-slate-200 font-medium mb-2">Training</h4>
                <p className="text-slate-300/90 text-sm">
                  Wait approximately 30 minutes while our AI system trains your
                  model
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6">
            <h3 className="text-lg font-medium text-slate-200 mb-4">
              Best Practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Image Selection
                </h4>
                <ul className="space-y-2 pl-6">
                  <li className="text-slate-300/90 text-sm list-disc">
                    Use high-resolution, clear images
                  </li>
                  <li className="text-slate-300/90 text-sm list-disc">
                    Maintain consistent lighting across images
                  </li>
                  <li className="text-slate-300/90 text-sm list-disc">
                    Include various angles and expressions
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Training Parameters
                </h4>
                <ul className="space-y-2 pl-6">
                  <li className="text-slate-300/90 text-sm list-disc">
                    Choose the appropriate gender setting
                  </li>
                  <li className="text-slate-300/90 text-sm list-disc">
                    Use descriptive model names for easy reference
                  </li>
                  <li className="text-slate-300/90 text-sm list-disc">
                    Follow zip file formatting guidelines
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/train-model"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                <span>Go to Model Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DocsPage;
