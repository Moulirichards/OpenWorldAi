
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
      color: "bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
      path: "/learn"
    },
    {
      title: "Use AI Assistant",
      description: "Get help with daily tasks and questions",
      icon: <MessageCircle className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      path: "/assistant"
    },
    {
      title: "Ask a Question",
      description: "Speak your question, get instant answers",
      icon: <Mic className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      path: "/ask"
    },
    {
      title: "Change Language",
      description: "Switch to your preferred language",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
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

  const handleQuickAction = (path: string) => {
    // For now, just show an alert. In a real app, you'd navigate to the page
    alert(`Navigating to ${path}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              AI for All: Empowering Every Voice,{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-3xl bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent mb-12 max-w-4xl mx-auto font-medium">
              🌍 Connecting the World, One Voice at a Time ✨
            </p>

            {/* Main Voice Interface */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 max-w-2xl mx-auto mb-16 border border-purple-200/50">
              <div className="text-center">
                <VoiceButton size="lg" className="mb-6 shadow-lg" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  🎤 Talk to AI Now
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Press the button and speak in any language. AI will understand and help you immediately.
                </p>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-purple-100">
                  <p className="text-sm text-gray-700 italic mb-3 font-medium">✨ Try saying:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <span className="bg-white/80 rounded-lg p-2 shadow-sm">"How do I apply for a job?"</span>
                    <span className="bg-white/80 rounded-lg p-2 shadow-sm">"Teach me about computers"</span>
                    <span className="bg-white/80 rounded-lg p-2 shadow-sm">"Help me with math"</span>
                    <span className="bg-white/80 rounded-lg p-2 shadow-sm">"What is healthy food?"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={() => handleQuickAction(action.path)}
                  className={`${action.color} text-white p-6 h-auto rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl border-0 min-h-[160px] flex flex-col justify-center`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {action.icon}
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="font-bold text-lg text-white leading-tight">{action.title}</h3>
                      <p className="text-sm text-white/95 leading-relaxed px-2">{action.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white/95">
                <div className="relative h-72">
                  <img
                    src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold border-0 shadow-lg">
                      <Play className="h-4 w-4 mr-2" />
                      Try Now
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{card.description}</p>
                  <div className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-8">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join millions of people worldwide who are already learning and growing with AI assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-5 text-lg font-semibold rounded-full border-0 shadow-xl">
              🎤 Start Speaking Now
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-5 text-lg font-semibold rounded-full">
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
