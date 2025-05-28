
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Brain, Target, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIConsulting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/services">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </Link>
        
        <div className="text-center mb-12">
          <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">AI Consulting Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic AI implementation to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Strategy", icon: <Target className="h-8 w-8" />, desc: "Develop comprehensive AI roadmaps" },
            { title: "Team Training", icon: <Users className="h-8 w-8" />, desc: "Upskill your workforce for AI adoption" },
            { title: "Innovation Labs", icon: <Lightbulb className="h-8 w-8" />, desc: "Prototype and test AI solutions" }
          ].map((service, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="text-purple-600 flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIConsulting;
