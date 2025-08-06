"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  RotateCcw,
  Sparkles,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react";
import { motion } from "framer-motion";

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("desktop");
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "AI Content Generation",
      description: "Watch as our AI creates compelling marketing copy in seconds",
      duration: 3000
    },
    {
      title: "Smart Audience Targeting", 
      description: "See how we identify and segment your ideal customers",
      duration: 4000
    },
    {
      title: "Predictive Analytics",
      description: "Discover insights that predict campaign performance",
      duration: 3500
    },
    {
      title: "Campaign Optimization",
      description: "Watch real-time optimization improve your ROI",
      duration: 4500
    }
  ];

  const devices = [
    { id: "desktop", icon: Monitor, label: "Desktop" },
    { id: "tablet", icon: Tablet, label: "Tablet" },
    { id: "mobile", icon: Smartphone, label: "Mobile" }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Start demo sequence
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= demoSteps.length - 1) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, demoSteps[currentStep]?.duration || 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              See ADmyBRAND AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI marketing automation with our interactive demo. 
            Watch how we transform your marketing in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Controls */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Device Selection */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">View Demo On</h3>
              <div className="grid grid-cols-3 gap-2">
                {devices.map((device) => {
                  const Icon = device.icon;
                  return (
                    <Button
                      key={device.id}
                      variant={currentDevice === device.id ? "default" : "outline"}
                      onClick={() => setCurrentDevice(device.id)}
                      className={`p-3 ${
                        currentDevice === device.id
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Demo Steps */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Demo Steps</h3>
              <div className="space-y-3">
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      currentStep === index
                        ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    animate={{
                      scale: currentStep === index ? 1.02 : 1,
                      opacity: currentStep === index ? 1 : 0.7
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        currentStep === index
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Demo Controls */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Demo Controls</h3>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Interactive
                </Badge>
              </div>
              <div className="flex space-x-3">
                <Button
                  onClick={togglePlay}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Start Demo'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(0)}
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Demo Screen */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Volume2 className="h-4 w-4" />
                  <Maximize className="h-4 w-4" />
                </div>
              </div>

              {/* Demo Content */}
              <div className={`relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden ${
                currentDevice === 'desktop' ? 'aspect-video' :
                currentDevice === 'tablet' ? 'aspect-[4/3] max-w-md mx-auto' :
                'aspect-[9/16] max-w-sm mx-auto'
              }`}>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center p-8">
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-full p-6 mb-6 inline-flex"
                      animate={{ 
                        rotate: isPlaying ? 360 : 0,
                        scale: isPlaying ? [1, 1.1, 1] : 1
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1, repeat: Infinity }
                      }}
                    >
                      <Sparkles className="h-12 w-12 text-purple-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {demoSteps[currentStep]?.title || "Ready to Start"}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {demoSteps[currentStep]?.description || "Click 'Start Demo' to begin the interactive experience"}
                    </p>
                    
                    {/* Animated Progress Bar */}
                    {isPlaying && (
                      <motion.div
                        className="w-full bg-gray-200 rounded-full h-2 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: (demoSteps[currentStep]?.duration || 3000) / 1000 }}
                        />
                      </motion.div>
                    )}

                    {/* Simulated UI Elements */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <motion.div
                        className="bg-white/60 rounded-lg p-4 text-left"
                        animate={{ 
                          y: isPlaying ? [0, -5, 0] : 0,
                          opacity: isPlaying ? [0.7, 1, 0.7] : 0.7
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-full h-2 bg-blue-200 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-blue-200 rounded"></div>
                      </motion.div>
                      <motion.div
                        className="bg-white/60 rounded-lg p-4 text-left"
                        animate={{ 
                          y: isPlaying ? [0, -5, 0] : 0,
                          opacity: isPlaying ? [0.7, 1, 0.7] : 0.7
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="w-full h-2 bg-purple-200 rounded mb-2"></div>
                        <div className="w-2/3 h-2 bg-purple-200 rounded"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Full Power?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              This demo shows just a glimpse of what ADmyBRAND AI can do. 
              Get full access with our 14-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Schedule Personal Demo
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}