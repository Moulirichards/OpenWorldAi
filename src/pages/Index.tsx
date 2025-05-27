
import React from 'react';
import { Mic, BookOpen, MessageCircle, Globe, Play, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import VoiceButton from '@/components/VoiceButton';
import AIForEveryoneSection from '@/components/AIForEveryoneSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const quickActions = [
    {
      title: "Learn Something",
      description: "Discover new skills through voice-guided lessons",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      path: "/learn"
    },
    {
      title: "Use AI Assistant",
      description: "Get help with daily tasks and questions",
      icon: <MessageCircle className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      path: "/assistant"
    },
    {
      title: "Ask a Question",
      description: "Speak your question, get instant answers",
      icon: <Mic className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      path: "/ask"
    },
    {
      title: "Change Language",
      description: "Switch to your preferred language",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      path: "/language"
    }
  ];

  const featuredCards = [
    {
      title: "Learn with AI",
      description: "Interactive lessons that adapt to your learning style and pace",
      image: "photo-1581091226825-a6a2a5aee158",
      features: ["Voice guidance", "Visual examples", "Progress tracking"]
    },
    {
      title: "Talk to AI",
      description: "Natural conversations with AI in your native language",
      image: "photo-1485827404703-89b55fcc595e",
      features: ["100+ languages", "Real-time responses", "Context awareness"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-500 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI for All: Empowering Every Voice,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Everywhere
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Connecting the World, One Voice at a Time
            </p>

            {/* Main Voice Interface */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto mb-16 border border-white/20">
              <div className="text-center">
                <VoiceButton size="lg" className="mb-6 shadow-xl" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Talk to AI Now</h2>
                <p className="text-gray-600 mb-6">
                  Press the button and speak in any language. AI will understand and help you immediately.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-sm text-gray-700 italic mb-2">Try saying:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <span>"How do I apply for a job?"</span>
                    <span>"Teach me about computers"</span>
                    <span>"Help me with math"</span>
                    <span>"What is healthy food?"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  className={`${action.color} text-white p-6 h-auto rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg border-0`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    {action.icon}
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-1 text-white">{action.title}</h3>
                      <p className="text-sm text-white/90">{action.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="relative h-64">
                  <img
                    src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold border-0 shadow-lg">
                      <Play className="h-4 w-4 mr-2" />
                      Try Now
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-lg">{card.description}</p>
                  <div className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI for Everyone Section */}
      <AIForEveryoneSection />

      {/* Global Services Section */}
      <ServicesSection />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of people worldwide who are already learning and growing with AI assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full border-0 shadow-xl">
              🎤 Start Speaking Now
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
              📱 Download App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
