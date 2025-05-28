
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartphoneBasics = () => {
  const modules = [
    { title: "Turning On Your Phone", duration: "3 min", completed: false },
    { title: "Making Your First Call", duration: "5 min", completed: false },
    { title: "Sending Text Messages", duration: "4 min", completed: false },
    { title: "Using Apps", duration: "8 min", completed: false },
    { title: "Camera Basics", duration: "6 min", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/basic-technology">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Basic Technology
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Smartphone Basics</h1>
        <p className="text-gray-600 mb-8">Learn the fundamentals of using a smartphone with step-by-step voice guidance.</p>
        
        <div className="grid grid-cols-1 gap-4">
          {modules.map((module, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {module.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                  <div>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                <Button>
                  <Play className="h-4 w-4 mr-2" />
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartphoneBasics;
