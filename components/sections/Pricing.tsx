"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Rocket,
  Calculator,
  Users,
  BarChart3,
  Sparkles
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses getting started with AI marketing",
    monthlyPrice: 29,
    yearlyPrice: 290,
    color: "from-blue-500 to-cyan-500",
    features: [
      { name: "AI Content Generation", included: true, limit: "1,000 words/month" },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "2 Team Members", included: true },
      { name: "Smart Audience Targeting", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "Priority Support", included: false },
      { name: "Custom Integrations", included: false }
    ]
  },
  {
    name: "Professional",
    icon: Crown,
    description: "Ideal for growing businesses that need advanced AI capabilities",
    monthlyPrice: 79,
    yearlyPrice: 790,
    popular: true,
    color: "from-purple-500 to-violet-500",
    features: [
      { name: "AI Content Generation", included: true, limit: "10,000 words/month" },
      { name: "Smart Audience Targeting", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "10 Team Members", included: true },
      { name: "A/B Testing", included: true },
      { name: "Custom Integrations", included: false },
      { name: "White-label Solution", included: false }
    ]
  },
  {
    name: "Enterprise",
    icon: Rocket,
    description: "For large organizations requiring unlimited AI power and support",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    color: "from-orange-500 to-red-500",
    features: [
      { name: "Unlimited AI Content", included: true },
      { name: "Advanced Targeting & Analytics", included: true },
      { name: "24/7 Dedicated Support", included: true },
      { name: "Unlimited Team Members", included: true },
      { name: "Custom Integrations", included: true },
      { name: "White-label Solution", included: true },
      { name: "Custom AI Training", included: true },
      { name: "SLA Guarantee", included: true }
    ]
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
            <Calculator className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Marketing Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a free trial, then choose the plan that scales with your business. 
            No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Yearly
            </span>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const originalPrice = isYearly ? plan.monthlyPrice * 12 : undefined;

            return (
              <Card
                key={plan.name}
                className={`relative p-8 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-2 border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50 shadow-xl' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">${price}</span>
                      <span className="text-gray-500 ml-2">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                    {isYearly && originalPrice && (
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-gray-400 line-through mr-2">${originalPrice}/year</span>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Save ${originalPrice - price}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                        {feature.limit && (
                          <div className="text-sm text-gray-500 mt-1">{feature.limit}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* ROI Calculator Toggle */}
        <div className="text-center mb-12">
          <Button
            variant="outline"
            onClick={() => setShowCalculator(!showCalculator)}
            className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
          >
            <Calculator className="w-4 h-4 mr-2" />
            {showCalculator ? 'Hide' : 'Show'} ROI Calculator
          </Button>
        </div>

        {/* ROI Calculator */}
        {showCalculator && (
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Calculate Your Marketing ROI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/80 rounded-lg p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Current Leads/Month</h4>
                <div className="text-3xl font-bold text-blue-600">1,250</div>
                <p className="text-sm text-gray-600 mt-2">Average increase with AI</p>
              </div>
              <div className="bg-white/80 rounded-lg p-6">
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Conversion Rate</h4>
                <div className="text-3xl font-bold text-green-600">4.2%</div>
                <p className="text-sm text-gray-600 mt-2">Typical improvement</p>
              </div>
              <div className="bg-white/80 rounded-lg p-6">
                <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Monthly ROI</h4>
                <div className="text-3xl font-bold text-purple-600">312%</div>
                <p className="text-sm text-gray-600 mt-2">Return on investment</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Based on average customer data, our AI suite typically delivers 3x ROI within the first month.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                Get Your Custom ROI Report
              </Button>
            </div>
          </Card>
        )}

        {/* FAQ Links */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Have questions about our pricing?</p>
          <div className="space-x-6">
            <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium">
              View FAQ
            </a>
            <span className="text-gray-300">•</span>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact Sales
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Compare Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}