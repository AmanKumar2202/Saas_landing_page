"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "ADmyBRAND AI transformed our marketing completely. We've seen a 400% increase in qualified leads and our content creation time has been cut in half. The AI insights are incredibly accurate.",
    results: "400% more leads",
    metric: "ROI"
  },
  {
    name: "Marcus Rodriguez", 
    title: "CEO",
    company: "GrowthStorm",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "The predictive analytics feature helped us identify our most valuable customer segments before our competitors. We've optimized our ad spend and increased our conversion rate by 250%.",
    results: "250% better conversions",
    metric: "Growth"
  },
  {
    name: "Emily Watson",
    title: "Head of Digital Marketing", 
    company: "InnovateLab",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "The AI chatbot builder is phenomenal. Our customer engagement increased by 300% and we're converting 40% more visitors into customers. The setup was surprisingly easy too.",
    results: "300% more engagement", 
    metric: "Conversion"
  },
  {
    name: "David Park",
    title: "Founder",
    company: "NextGen Solutions",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "As a startup, we needed to compete with bigger players. ADmyBRAND AI leveled the playing field. Our brand voice is now consistent across all channels and our campaigns perform 5x better.",
    results: "5x campaign performance",
    metric: "Efficiency"
  },
  {
    name: "Lisa Thompson",
    title: "VP Marketing",
    company: "ScaleUp Ventures", 
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "The content generation quality is outstanding. What used to take our team days now takes hours. We've scaled our content output by 800% while maintaining high quality standards.",
    results: "800% content increase",
    metric: "Productivity"
  },
  {
    name: "James Wilson",
    title: "Digital Marketing Manager", 
    company: "RetailMax",
    image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    content: "The audience targeting is incredibly precise. We reduced our customer acquisition cost by 60% while increasing our reach. The AI seems to understand our customers better than we do!",
    results: "60% lower CAC",
    metric: "Targeting"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 border-orange-200">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted by Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are transforming their marketing with AI 
            and achieving unprecedented growth.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-12">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className={`p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  index === 0 ? 'lg:scale-105 lg:shadow-2xl lg:border-blue-200' : ''
                }`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {testimonial.results}
                    </Badge>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 opacity-50" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Metric Badge */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {testimonial.metric} Success
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
            <p className="text-gray-600">Average ROI</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}