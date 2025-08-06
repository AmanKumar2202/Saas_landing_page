"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "General",
    question: "What is ADmyBRAND AI Suite and how does it work?",
    answer: "ADmyBRAND AI Suite is a comprehensive artificial intelligence platform designed to revolutionize your marketing efforts. It combines advanced machine learning algorithms with intuitive interfaces to help you create compelling content, analyze audience behavior, optimize campaigns, and automate marketing workflows. Our AI learns from your brand voice and customer data to deliver personalized, high-converting marketing materials at scale."
  },
  {
    category: "Features",
    question: "How accurate is the AI content generation?",
    answer: "Our AI content generation achieves 95%+ accuracy rates and maintains your brand voice consistently. The system is trained on millions of high-converting marketing materials and continuously learns from your feedback. Users typically see 80% time savings on content creation while maintaining professional quality that matches or exceeds human-written content."
  },
  {
    category: "Pricing",
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle. We'll prorate any charges accordingly, and you'll never lose access to your data or previous work when changing plans."
  },
  {
    category: "Technical",
    question: "What integrations are available?",
    answer: "ADmyBRAND AI integrates with 50+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, WordPress, Zapier, and many more. We also offer a robust API for custom integrations and webhook support for real-time data synchronization."
  },
  {
    category: "Features",
    question: "How does the predictive analytics feature work?",
    answer: "Our predictive analytics uses advanced machine learning to analyze historical campaign data, customer behavior patterns, and market trends to forecast performance. It can predict click-through rates, conversion rates, optimal posting times, and budget allocation with 92% accuracy, helping you make data-driven decisions before launching campaigns."
  },
  {
    category: "General",
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features in our Professional plan. No credit card required to start. You can create unlimited content, run analytics, and test all integrations during your trial period. After the trial, you can choose the plan that best fits your needs."
  },
  {
    category: "Technical",
    question: "How secure is my data?",
    answer: "Security is our top priority. We use enterprise-grade encryption (AES-256), SOC 2 Type II compliance, and follow GDPR/CCPA guidelines. Your data is stored in secure, redundant data centers with 99.9% uptime. We never share your data with third parties, and you maintain full ownership of all your content and analytics."
  },
  {
    category: "Support",
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 support through multiple channels: live chat, email, and phone support for Enterprise customers. Our average response time is under 2 hours. We also offer comprehensive documentation, video tutorials, webinar training sessions, and a dedicated success manager for Enterprise accounts."
  }
];

const categories = ["All", "General", "Features", "Pricing", "Technical", "Support"];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFAQs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              to Know
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <Card
                key={index}
                className="overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge 
                        variant="secondary" 
                        className="mr-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
                      >
                        {faq.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <div className="max-w-md mx-auto">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our friendly support team is ready to help you get the most out of ADmyBRAND AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}