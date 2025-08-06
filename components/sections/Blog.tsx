"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Marketing: 2025 Trends to Watch",
    excerpt: "Discover the latest AI marketing trends that will shape the industry in 2025. From predictive analytics to personalized content generation, learn how to stay ahead of the curve.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI Trends",
    author: "Sarah Johnson",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "How to Increase Conversion Rates by 300% with AI-Powered Personalization",
    excerpt: "Learn the proven strategies that top brands use to deliver personalized experiences that convert. Complete with case studies and actionable tips.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Conversion",
    author: "Mike Chen",
    date: "Jan 12, 2025", 
    readTime: "12 min read",
    featured: false
  },
  {
    title: "Building Better Customer Journeys with Predictive Analytics",
    excerpt: "Map out customer journeys that actually work. Use predictive analytics to anticipate customer needs and create seamless experiences.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Analytics",
    author: "Emily Rodriguez",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    title: "Content Creation at Scale: AI Writing Best Practices",
    excerpt: "Master the art of AI-assisted content creation. Learn how to maintain brand voice while scaling your content production exponentially.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Content",
    author: "David Park",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "ROI Optimization: Getting the Most from Your Marketing AI Investment",
    excerpt: "Maximize your return on AI marketing investments with these proven optimization strategies. Learn how to measure success and scale wins.",
    image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "ROI",
    author: "Lisa Thompson",
    date: "Jan 5, 2025",
    readTime: "15 min read",
    featured: false
  },
  {
    title: "Chatbot Success Stories: 10 Brands Winning with Conversational AI",
    excerpt: "Real-world examples of brands using AI chatbots to transform customer service and drive sales. Get inspired by their strategies and results.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Case Studies",
    author: "James Wilson",
    date: "Jan 3, 2025",
    readTime: "11 min read",
    featured: false
  }
];

export function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
            <BookOpen className="w-4 h-4 mr-2" />
            Resources & Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Latest Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the competition with expert insights, case studies, and actionable strategies 
            for AI-powered marketing success.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 w-fit">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-fit group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{post.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more
                  <ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Marketing Trends</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly insights, case studies, and actionable tips delivered directly to your inbox. 
            Join 25,000+ marketing professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-blue-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </Card>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}