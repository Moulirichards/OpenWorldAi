
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Users, Heart, Award, Target, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: "50M+", label: "People Helped", icon: <Users className="h-8 w-8" /> },
    { number: "100+", label: "Languages Supported", icon: <Globe className="h-8 w-8" /> },
    { number: "25", label: "Countries", icon: <Award className="h-8 w-8" /> },
    { number: "99.9%", label: "Uptime", icon: <Target className="h-8 w-8" /> }
  ];

  const values = [
    {
      title: "Accessibility First",
      description: "Technology should be available to everyone, regardless of literacy level or technical expertise",
      icon: <Heart className="h-12 w-12" />,
      color: "bg-red-500"
    },
    {
      title: "Voice-Powered Inclusion",
      description: "Breaking down barriers through natural voice interactions in native languages",
      icon: <Globe className="h-12 w-12" />,
      color: "bg-blue-500"
    },
    {
      title: "Continuous Innovation",
      description: "Constantly improving our AI to better serve underrepresented communities",
      icon: <Lightbulb className="h-12 w-12" />,
      color: "bg-green-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      background: "Former Google AI researcher focused on accessibility",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      background: "20+ years in enterprise software and cloud infrastructure",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of AI Research",
      background: "Specialist in multilingual NLP and inclusive AI design",
      image: "photo-1500673922987-e212871fec22"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Head of Global Operations",
      background: "Expert in international expansion and cultural adaptation",
      image: "photo-1518495973542-4542c06a5843"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Open World AI</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            We believe that artificial intelligence should be accessible to everyone, everywhere, 
            regardless of literacy level, technical expertise, or economic background.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Open World AI was born from a simple yet powerful vision: 
                to democratize access to artificial intelligence for the world's most underserved populations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We recognized that while AI was rapidly advancing, billions of people were being left behind 
                due to literacy barriers, language limitations, and lack of technical infrastructure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve over 50 million users across 25 countries, 
                providing AI assistance in 100+ languages through our voice-first platform.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=800&q=80"
                alt="Global reach"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Impact by Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${value.color} text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square">
                  <img
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.background}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Global Presence</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            With offices and partners across six continents, we're committed to serving communities worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { region: "North America", offices: "🇺🇸 🇨🇦", count: "5 offices" },
              { region: "Europe", offices: "🇬🇧 🇩🇪 🇫🇷", count: "8 offices" },
              { region: "Asia Pacific", offices: "🇮🇳 🇯🇵 🇸🇬", count: "12 offices" },
              { region: "Rest of World", offices: "🇧🇷 🇿🇦 🇦🇺", count: "6 offices" }
            ].map((region, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{region.offices}</div>
                <h3 className="font-bold text-lg mb-1">{region.region}</h3>
                <p className="text-blue-100 text-sm">{region.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
