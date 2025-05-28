
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Code, Smartphone, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const features = [
    { title: "Responsive Design", icon: <Smartphone className="h-6 w-6" /> },
    { title: "Fast Performance", icon: <Zap className="h-6 w-6" /> },
    { title: "SEO Optimized", icon: <Globe className="h-6 w-6" /> },
    { title: "Modern Frameworks", icon: <Code className="h-6 w-6" /> }
  ];

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
          <Code className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom web applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-blue-600 flex justify-center mb-3">
                {feature.icon}
              </div>
              <h3 className="font-bold">{feature.title}</h3>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            Request Quote
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
