
import React from 'react';
import { Cloud, Cpu, Shield, Database, Smartphone, Globe, Zap, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const ServicesSection = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI development for businesses worldwide",
      icon: <Cpu className="h-8 w-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and migration services",
      icon: <Cloud className="h-8 w-8 text-white" />,
      color: "bg-purple-600"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "bg-green-600"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "bg-red-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "bg-indigo-600"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps for global markets",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      color: "bg-orange-600"
    },
    {
      title: "Global Consulting",
      description: "Strategic IT consulting for international expansion",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "bg-teal-600"
    },
    {
      title: "Team Augmentation",
      description: "Scale your team with our expert developers",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global IT Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions for businesses of all sizes, delivered by our international team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              hasAudio={true}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies worldwide who trust Open World AI for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
