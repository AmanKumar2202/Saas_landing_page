"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Palette, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, social media posts, and marketing materials in seconds with our advanced AI writing assistant.",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision using AI-powered audience analysis and segmentation.",
    badge: "New",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast campaign performance and optimize your marketing spend with machine learning insights.",
    badge: "Pro",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Builder",
    description: "Build intelligent chatbots that engage customers 24/7 and convert leads into sales automatically.",
    badge: "Hot",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "Brand Voice Optimizer",
    description: "Maintain consistent brand messaging across all channels with AI-powered voice and tone analysis.",
    badge: "Updated",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Set up intelligent marketing workflows that adapt and optimize themselves based on real-time performance data.",
    badge: "Premium",
    color: "from-indigo-500 to-blue-500"
  }
];

export function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful AI Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create, optimize, 
            and scale your marketing efforts with unprecedented efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`p-8 h-full bg-white/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-700 transition-all duration-300"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to experience the power of AI marketing?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}