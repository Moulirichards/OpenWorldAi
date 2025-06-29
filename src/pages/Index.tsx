
import React from 'react';
import { Mic, BookOpen, MessageCircle, Globe, Play, ArrowRight, Cog, Users, TrendingUp, Zap } from 'lucide-react';
import Header from '@/components/Header';
import VoiceButton from '@/components/VoiceButton';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const quickActions = [
    {
      title: "Categories",
      description: "Explore all available categories and content",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-gray-800 hover:bg-gray-700",
      path: "/categories"
    },
    {
      title: t('action.assistant'),
      description: t('action.assistant.desc'),
      icon: <MessageCircle className="h-8 w-8" />,
      color: "bg-gray-800 hover:bg-gray-700",
      path: "/assistant"
    },
    {
      title: t('action.ask'),
      description: t('action.ask.desc'),
      icon: <Mic className="h-8 w-8" />,
      color: "bg-gray-800 hover:bg-gray-700",
      path: "/ask"
    },
    {
      title: "Tools",
      description: "Access helpful tools and utilities",
      icon: <Cog className="h-8 w-8" />,
      color: "bg-gray-800 hover:bg-gray-700",
      path: "/tools/calculator"
    }
  ];

  const featuredCards = [
    {
      title: "AI-Powered Categories",
      description: "Discover content organized by intelligent categorization",
      image: "photo-1581091226825-a6a2a5aee158",
      features: ["Smart organization", "Easy navigation", "Personalized content"]
    },
    {
      title: "Talk to AI",
      description: "Natural conversations with AI in your native language",
      image: "photo-1485827404703-89b55fcc595e",
      features: ["100+ languages", "Real-time responses", "Context awareness"]
    }
  ];

  const interactiveTools = [
    {
      title: "Global Community",
      description: "Connect with learners worldwide and share experiences",
      icon: <Users className="h-12 w-12 text-gray-800" />,
      path: "/community/forum",
      gradient: "from-gray-100 to-gray-200"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your journey with detailed analytics",
      icon: <TrendingUp className="h-12 w-12 text-gray-800" />,
      path: "/profile/progress", 
      gradient: "from-gray-100 to-gray-200"
    },
    {
      title: "Smart Tools",
      description: "Access calculator, calendar, notes and video chat tools",
      icon: <Zap className="h-12 w-12 text-gray-800" />,
      path: "/tools/calculator",
      gradient: "from-gray-100 to-gray-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
              {t('hero.title')}
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium">
              {t('hero.tagline')}
            </p>

            {/* Main Voice Interface */}
            <div className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl mx-auto mb-16 border border-gray-200">
              <div className="text-center">
                <VoiceButton size="lg" className="mb-6 shadow-lg" />
                <h2 className="text-3xl font-bold text-black mb-4">
                  {t('hero.talk')}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {t('hero.description')}
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-700 italic mb-3 font-medium">{t('hero.try')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <span className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">{t('hero.examples.job')}</span>
                    <span className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">"Show me categories"</span>
                    <span className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">{t('hero.examples.math')}</span>
                    <span className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">{t('hero.examples.health')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.path}>
                  <Button
                    className={`${action.color} text-white p-6 h-auto rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl border-0 min-h-[140px] flex flex-col justify-center w-full`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-white/10 rounded-full p-3 border border-gray-600">
                        {action.icon}
                      </div>
                      <div className="text-center space-y-1">
                        <h3 className="font-bold text-lg text-white leading-tight">{action.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 shadow-lg bg-white">
                <div className="relative h-72">
                  <img
                    src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={card.title}
                    className="w-full h-full object-cover filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <Button className="bg-white text-black hover:bg-gray-100 font-semibold border-0 shadow-lg">
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
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-semibold py-3 shadow-lg">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Explore More Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover additional tools and features to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {interactiveTools.map((tool, index) => (
              <Link key={index} to={tool.path}>
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 shadow-lg bg-white cursor-pointer">
                  <div className={`bg-gradient-to-r ${tool.gradient} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-gray-300`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{tool.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  <Button className="bg-black hover:bg-gray-800 text-white font-semibold">
                    Explore
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Card>
              </Link>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Profile", path: "/profile", icon: "👤" },
                { name: "Support", path: "/support", icon: "🎧" },
                { name: "Community", path: "/community/forum", icon: "👥" },
                { name: "Resources", path: "/resources/downloads", icon: "📁" },
                { name: "Tools", path: "/tools/calculator", icon: "🔧" }
              ].map((link, index) => (
                <Link key={index} to={link.path}>
                  <Button variant="outline" className="w-full p-4 h-auto flex flex-col items-center space-y-2 hover:bg-gray-50 hover:border-gray-400 border-gray-300">
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-sm font-medium text-black">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Services Section */}
      <ServicesSection />

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-8">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/ask">
              <Button className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg font-semibold rounded-full border-0 shadow-xl">
                {t('cta.speak')}
              </Button>
            </Link>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 text-lg font-semibold rounded-full">
              {t('cta.download')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
