
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  const tutorials = [
    { title: "Getting Started", duration: "5 min", level: "Beginner" },
    { title: "Account Setup", duration: "8 min", level: "Beginner" },
    { title: "Using AI Assistant", duration: "12 min", level: "Intermediate" },
    { title: "Advanced Features", duration: "15 min", level: "Advanced" },
    { title: "Troubleshooting", duration: "10 min", level: "Intermediate" },
    { title: "Mobile App Guide", duration: "7 min", level: "Beginner" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/support">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Video Tutorials</h1>
          <p className="text-gray-600">Step-by-step guides to help you succeed</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-2">{tutorial.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">{tutorial.duration}</span>
                <span className={`px-2 py-1 text-xs rounded ${
                  tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {tutorial.level}
                </span>
              </div>
              <Button className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Watch Tutorial
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
