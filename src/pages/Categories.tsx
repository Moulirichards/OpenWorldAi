
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VoiceButton from '@/components/VoiceButton';
import { BookOpen, Users, Briefcase, Heart, Calculator, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: "Education",
      description: "Learn new skills and expand your knowledge",
      icon: <BookOpen className="h-12 w-12" />,
      color: "bg-blue-600",
      items: ["Online Courses", "Tutorials", "Skill Development", "Academic Learning"],
      path: "/categories/education"
    },
    {
      name: "Community",
      description: "Connect with people and join discussions",
      icon: <Users className="h-12 w-12" />,
      color: "bg-green-600",
      items: ["Forums", "Events", "Networking", "Social Groups"],
      path: "/categories/community"
    },
    {
      name: "Business",
      description: "Professional services and business solutions",
      icon: <Briefcase className="h-12 w-12" />,
      color: "bg-purple-600",
      items: ["Consulting", "Services", "Solutions", "Support"],
      path: "/categories/business"
    },
    {
      name: "Health & Wellness",
      description: "Take care of your physical and mental health",
      icon: <Heart className="h-12 w-12" />,
      color: "bg-red-600",
      items: ["Health Tips", "Wellness Programs", "Mental Health", "Fitness"],
      path: "/categories/health"
    },
    {
      name: "Tools & Resources",
      description: "Useful tools to make your life easier",
      icon: <Calculator className="h-12 w-12" />,
      color: "bg-orange-600",
      items: ["Calculator", "Calendar", "Notes", "Video Chat"],
      path: "/categories/tools"
    },
    {
      name: "Global Services",
      description: "International services and support",
      icon: <Globe className="h-12 w-12" />,
      color: "bg-teal-600",
      items: ["Translation", "Multi-language", "Global Support", "International"],
      path: "/categories/global"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Categories</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover various categories of content, services, and tools designed to help you succeed
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <VoiceButton size="lg" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ask About Any Category</h3>
            <p className="text-blue-100">Say "Tell me about..." and AI will guide you to the right category</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Available Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className={`${category.color} text-white p-8`}>
                  <div className="flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{category.name}</h3>
                  <p className="text-blue-100 text-center">{category.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={category.path}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Explore Category
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our AI assistant to help you find the perfect category or resource for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ask">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                Ask AI Assistant
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
