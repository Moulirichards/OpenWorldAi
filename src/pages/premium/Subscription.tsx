
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Crown, Star, Zap, Globe, Shield, Headphones } from 'lucide-react';

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Basic",
      price: billingCycle === 'monthly' ? 9 : 90,
      description: "Perfect for individual learners",
      icon: <Star className="h-8 w-8" />,
      color: "bg-blue-500",
      features: [
        "Access to all basic courses",
        "Voice-guided learning",
        "5 languages supported",
        "Mobile app access",
        "Basic AI assistance",
        "Progress tracking"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: billingCycle === 'monthly' ? 19 : 190,
      description: "Best for serious learners",
      icon: <Crown className="h-8 w-8" />,
      color: "bg-purple-500",
      features: [
        "Everything in Basic",
        "Advanced AI conversations",
        "50+ languages supported",
        "Offline learning mode",
        "Priority support",
        "Custom learning paths",
        "Certificate generation",
        "Group learning features"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: billingCycle === 'monthly' ? 49 : 490,
      description: "For organizations and teams",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      features: [
        "Everything in Premium",
        "Unlimited team members",
        "Admin dashboard",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Advanced analytics",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Language Support",
      description: "Learn and communicate in 100+ languages"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security and privacy protection"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast AI",
      description: "Instant responses with our optimized AI models"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance in your language"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Unlock Your Learning Potential
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join millions of learners worldwide with premium AI-powered education
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                Save 15%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 border-0 shadow-xl ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`${plan.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Premium?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock advanced features designed to accelerate your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join over 50 million learners who have already transformed their lives with AI-powered education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;
