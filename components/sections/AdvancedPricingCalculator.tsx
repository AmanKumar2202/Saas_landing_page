"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  DollarSign,
  BarChart3,
  Target,
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export function AdvancedPricingCalculator() {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 50000,
    marketingBudget: 10000,
    teamSize: 5,
    industry: "ecommerce",
    currentConversionRate: 2.5,
    monthlyLeads: 1000,
    averageOrderValue: 150
  });

  const [results, setResults] = useState({
    recommendedPlan: "Professional",
    monthlySavings: 0,
    roiIncrease: 0,
    additionalRevenue: 0,
    timesSaved: 0
  });

  const industries = [
    { value: "ecommerce", label: "E-commerce", multiplier: 1.2 },
    { value: "saas", label: "SaaS", multiplier: 1.5 },
    { value: "agency", label: "Marketing Agency", multiplier: 1.3 },
    { value: "retail", label: "Retail", multiplier: 1.1 },
    { value: "healthcare", label: "Healthcare", multiplier: 1.0 },
    { value: "finance", label: "Finance", multiplier: 1.4 },
    { value: "education", label: "Education", multiplier: 0.9 },
    { value: "other", label: "Other", multiplier: 1.0 }
  ];

  const plans = [
    { name: "Starter", price: 29, maxRevenue: 100000, features: 5 },
    { name: "Professional", price: 79, maxRevenue: 500000, features: 8 },
    { name: "Enterprise", price: 199, maxRevenue: Infinity, features: 12 }
  ];

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const industry = industries.find(i => i.value === inputs.industry);
    const multiplier = industry?.multiplier || 1.0;
    
    // Determine recommended plan based on revenue and team size
    let recommendedPlan = "Starter";
    if (inputs.monthlyRevenue > 100000 || inputs.teamSize > 5) {
      recommendedPlan = "Professional";
    }
    if (inputs.monthlyRevenue > 500000 || inputs.teamSize > 15) {
      recommendedPlan = "Enterprise";
    }

    // Calculate improvements based on industry benchmarks
    const conversionImprovement = (3.5 - inputs.currentConversionRate) * multiplier;
    const leadIncrease = inputs.monthlyLeads * 0.4 * multiplier;
    const efficiencyGain = inputs.marketingBudget * 0.25;
    
    // Calculate financial impact
    const additionalRevenue = (leadIncrease * (inputs.currentConversionRate + conversionImprovement) / 100) * inputs.averageOrderValue;
    const monthlySavings = efficiencyGain;
    const roiIncrease = ((additionalRevenue + monthlySavings) / inputs.marketingBudget) * 100;
    const timesSaved = inputs.teamSize * 20; // hours per month

    setResults({
      recommendedPlan,
      monthlySavings: Math.round(monthlySavings),
      roiIncrease: Math.round(roiIncrease),
      additionalRevenue: Math.round(additionalRevenue),
      timesSaved: Math.round(timesSaved)
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-purple-50">
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
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Calculate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Marketing ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how much ADmyBRAND AI can save you and boost your revenue. 
            Get personalized recommendations based on your business metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
              
              <div className="space-y-6">
                {/* Monthly Revenue */}
                <div>
                  <Label className="text-base font-medium">Monthly Revenue</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={inputs.monthlyRevenue}
                      onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
                      className="text-lg"
                    />
                    <p className="text-sm text-gray-500 mt-1">${inputs.monthlyRevenue.toLocaleString()}/month</p>
                  </div>
                </div>

                {/* Marketing Budget */}
                <div>
                  <Label className="text-base font-medium">Monthly Marketing Budget</Label>
                  <div className="mt-2">
                    <Slider
                      value={[inputs.marketingBudget]}
                      onValueChange={(value) => handleInputChange('marketingBudget', value[0])}
                      max={50000}
                      min={1000}
                      step={500}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500 mt-1">${inputs.marketingBudget.toLocaleString()}/month</p>
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <Label className="text-base font-medium">Marketing Team Size</Label>
                  <div className="mt-2">
                    <Slider
                      value={[inputs.teamSize]}
                      onValueChange={(value) => handleInputChange('teamSize', value[0])}
                      max={50}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500 mt-1">{inputs.teamSize} team members</p>
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <Label className="text-base font-medium">Industry</Label>
                  <Select value={inputs.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Current Conversion Rate */}
                <div>
                  <Label className="text-base font-medium">Current Conversion Rate (%)</Label>
                  <div className="mt-2">
                    <Slider
                      value={[inputs.currentConversionRate]}
                      onValueChange={(value) => handleInputChange('currentConversionRate', value[0])}
                      max={10}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500 mt-1">{inputs.currentConversionRate}%</p>
                  </div>
                </div>

                {/* Monthly Leads */}
                <div>
                  <Label className="text-base font-medium">Monthly Leads</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={inputs.monthlyLeads}
                      onChange={(e) => handleInputChange('monthlyLeads', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>

                {/* Average Order Value */}
                <div>
                  <Label className="text-base font-medium">Average Order Value ($)</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={inputs.averageOrderValue}
                      onChange={(e) => handleInputChange('averageOrderValue', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Recommended Plan */}
              <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Recommended Plan</h3>
                  <Badge className="bg-white/20 text-white border-white/30">
                    Best Fit
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-2">{results.recommendedPlan}</div>
                <p className="text-blue-100">
                  Based on your business size and revenue, this plan offers the best value and features for your needs.
                </p>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Monthly Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${results.monthlySavings.toLocaleString()}
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">ROI Increase</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {results.roiIncrease}%
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Additional Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    ${results.additionalRevenue.toLocaleString()}
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {results.timesSaved}h/mo
                  </div>
                </Card>
              </div>

              {/* Annual Projection */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">12-Month Projection</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Savings:</span>
                    <span className="font-bold text-green-600">
                      ${(results.monthlySavings * 12).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Revenue:</span>
                    <span className="font-bold text-blue-600">
                      ${(results.additionalRevenue * 12).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Saved:</span>
                    <span className="font-bold text-purple-600">
                      {results.timesSaved * 12} hours
                    </span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Total Value:</span>
                    <span className="font-bold text-green-600">
                      ${((results.monthlySavings + results.additionalRevenue) * 12).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * Results are estimates based on industry benchmarks and typical customer improvements. 
            Actual results may vary depending on implementation and market conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}