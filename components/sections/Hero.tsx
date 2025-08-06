"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ CHANGE MARKED HERE: Added the opening curly brace for the function body.
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing AI-Powered Marketing Revolution
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Transform Your Brand
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              with AI Marketing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of artificial intelligence to create compelling campaigns, 
            analyze customer behavior, and skyrocket your brand&apos;s growth with our comprehensive AI suite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="font-semibold">300% ROI Increase</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">10x Faster Campaigns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">50K+ Happy Customers</span>
            </div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div
            className={`relative mx-auto max-w-5xl transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <motion.div 
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                <motion.div 
                  className="text-center"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-full p-6 mb-4 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="h-12 w-12 text-blue-600" />
                  </motion.div>
                  <p className="text-gray-700 font-medium">Click to see ADmyBRAND AI in action</p>
                </motion.div>
                
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-4 left-4 w-16 h-16 bg-blue-400/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 w-12 h-12 bg-purple-400/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"
                animate={{ 
                  y: [0, -5, 0],
                  x: [0, 2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-80"
                animate={{ 
                  y: [0, 3, 0],
                  x: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute top-1/2 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ✅ CHANGE MARKED H