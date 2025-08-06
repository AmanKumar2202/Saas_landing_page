"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Code2, 
  Palette, 
  Layout, 
  MousePointer,
  Sparkles,
  Copy,
  Check,
  Eye,
  EyeOff
} from "lucide-react";
import { motion } from "framer-motion";

export function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState("buttons");
  const [copied, setCopied] = useState("");
  const [showCode, setShowCode] = useState(false);

  const components = [
    {
      id: "buttons",
      name: "Buttons",
      icon: MousePointer,
      description: "Interactive buttons with various styles and states",
      examples: [
        { 
          component: <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Primary Button</Button>,
          code: `<Button className="bg-gradient-to-r from-blue-600 to-purple-600">Primary Button</Button>`
        },
        { 
          component: <Button variant="outline">Outline Button</Button>,
          code: `<Button variant="outline">Outline Button</Button>`
        },
        { 
          component: <Button variant="ghost">Ghost Button</Button>,
          code: `<Button variant="ghost">Ghost Button</Button>`
        }
      ]
    },
    {
      id: "cards",
      name: "Cards",
      icon: Layout,
      description: "Flexible card components with glassmorphism effects",
      examples: [
        {
          component: (
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg max-w-sm">
              <h3 className="font-bold mb-2">Glassmorphism Card</h3>
              <p className="text-gray-600">Beautiful card with backdrop blur effect</p>
            </Card>
          ),
          code: `<Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
  <h3 className="font-bold mb-2">Glassmorphism Card</h3>
  <p className="text-gray-600">Beautiful card with backdrop blur effect</p>
</Card>`
        }
      ]
    },
    {
      id: "badges",
      name: "Badges",
      icon: Sparkles,
      description: "Status indicators and labels with gradient styles",
      examples: [
        {
          component: <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">New Feature</Badge>,
          code: `<Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">New Feature</Badge>`
        },
        {
          component: <Badge variant="outline">Outline Badge</Badge>,
          code: `<Badge variant="outline">Outline Badge</Badge>`
        }
      ]
    },
    {
      id: "forms",
      name: "Form Elements",
      icon: Code2,
      description: "Input fields, selects, and form controls",
      examples: [
        {
          component: (
            <div className="space-y-4 max-w-sm">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={3} />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>
          ),
          code: `<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" placeholder="Enter your email" />
  </div>
  <div>
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Your message" rows={3} />
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="notifications" />
    <Label htmlFor="notifications">Enable notifications</Label>
  </div>
</div>`
        }
      ]
    }
  ];

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
            <Code2 className="w-4 h-4 mr-2" />
            Component Library
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Reusable UI
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Components
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive component library built with modern design principles. 
            Copy the code and use these components in your own projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Component Navigation */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Components</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCode(!showCode)}
                  className="border-gray-300"
                >
                  {showCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="space-y-2">
                {components.map((component) => {
                  const Icon = component.icon;
                  return (
                    <button
                      key={component.id}
                      onClick={() => setActiveComponent(component.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        activeComponent === component.id
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-900'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <Icon className="h-4 w-4 mr-2" />
                        <span className="font-medium">{component.name}</span>
                      </div>
                      <p className="text-xs text-gray-500">{component.description}</p>
                    </button>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Component Examples */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {components.map((component) => {
              if (component.id !== activeComponent) return null;
              
              return (
                <div key={component.id} className="space-y-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{component.name}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </div>

                  {component.examples.map((example, index) => (
                    <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                      <div className="space-y-6">
                        {/* Component Preview */}
                        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                          <div className="flex items-center justify-center min-h-[100px]">
                            {example.component}
                          </div>
                        </div>

                        {/* Code Block */}
                        {showCode && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  <Code2 className="w-3 h-3 mr-1" />
                                  React + Tailwind CSS
                                </Badge>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyCode(example.code, `${component.id}-${index}`)}
                                  className="border-gray-300"
                                >
                                  {copied === `${component.id}-${index}` ? (
                                    <Check className="h-4 w-4 text-green-600" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{example.code}</code>
                              </pre>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Usage Instructions */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Copy the component code from the examples above
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Install required dependencies (Tailwind CSS, Radix UI)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Paste into your React/Next.js project
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Customize colors and styles as needed
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Palette className="w-4 h-4 mt-1 mr-3 text-purple-600 flex-shrink-0" />
                    Modern glassmorphism design
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 mt-1 mr-3 text-purple-600 flex-shrink-0" />
                    Smooth animations and transitions
                  </li>
                  <li className="flex items-start">
                    <Layout className="w-4 h-4 mt-1 mr-3 text-purple-600 flex-shrink-0" />
                    Fully responsive design
                  </li>
                  <li className="flex items-start">
                    <Code2 className="w-4 h-4 mt-1 mr-3 text-purple-600 flex-shrink-0" />
                    TypeScript support included
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}