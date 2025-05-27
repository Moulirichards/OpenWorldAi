
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
      color: "bg-green-500 hover:bg-green-600",
      path: "/learn"
    },
    {
      title: "Use AI Assistant",
      description: "Get help with daily tasks and questions",
      icon: <MessageCircle className="h-8 w-8" />,
      color: "bg-blue-500 hover:bg-blue-600",
      path: "/assistant"
    },
    {
      title: "Ask a Question",
      description: "Speak your question, get instant answers",
      icon: <Mic className="h-8 w-8" />,
      color: "bg-purple-500 hover:bg-purple-600",
      path: "/ask"
    },
    {
      title: "Change Language",
      description: "Switch to your preferred language",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-orange-500 hover:bg-orange-600",
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI for All: Empowering Every Voice,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Connecting the World, One Voice at a Time
            </p>

            {/* Main Voice Interface */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <VoiceButton size="lg" className="mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Talk to AI Now</h2>
                <p className="text-gray-600 mb-6">
                  Press the button and speak in any language. AI will understand and help you immediately.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
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
                  className={`${action.color} text-white p-6 h-auto rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    {action.icon}
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative h-64">
                  <img
                    src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
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
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of people worldwide who are already learning and growing with AI assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
              🎤 Start Speaking Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
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
