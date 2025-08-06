"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Enterprise", href: "#enterprise" },
        { name: "API Documentation", href: "#api" },
        { name: "Integrations", href: "#integrations" },
        { name: "What's New", href: "#updates" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Help Center", href: "#help" },
        { name: "Webinars", href: "#webinars" },
        { name: "Templates", href: "#templates" },
        { name: "ROI Calculator", href: "#calculator" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
        { name: "Partner Program", href: "#partners" },
        { name: "Affiliate Program", href: "#affiliates" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR Compliance", href: "#gdpr" },
        { name: "Security", href: "#security" },
        { name: "Trust Center", href: "#trust" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white border-none">
                <Mail className="w-4 h-4 mr-2" />
                Stay Updated
              </Badge>
              <h3 className="text-3xl font-bold mb-4">
                Get the latest AI marketing insights
              </h3>
              <p className="text-blue-100 text-lg">
                Join 25,000+ marketers who get our weekly newsletter with industry insights, 
                case studies, and exclusive tips for AI-powered marketing success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ADmyBRAND AI</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Transform your marketing with the power of artificial intelligence. 
              Create compelling campaigns, analyze customer behavior, and skyrocket 
              your brand's growth with our comprehensive AI suite.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-blue-100">
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-sm">123 Innovation Drive, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-sm">hello@admybrand.ai</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-blue-100 text-sm">
                © {currentYear} ADmyBRAND AI Suite. All rights reserved.
              </p>
              <div className="flex items-center text-blue-100 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
                <span>in San Francisco</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-4 text-sm text-blue-100">
                <a href="#status" className="hover:text-white transition-colors">
                  Status
                </a>
                <span className="text-white/30">•</span>
                <a href="#changelog" className="hover:text-white transition-colors">
                  Changelog
                </a>
                <span className="text-white/30">•</span>
                <a href="#sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}