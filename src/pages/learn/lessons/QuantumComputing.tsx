
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumComputing = () => {
  const modules = [
    "Introduction to Quantum Mechanics",
    "Quantum Bits and Superposition",
    "Quantum Algorithms",
    "Real-world Applications",
    "Future of Quantum Computing"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/basic-technology">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Technology
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cpu className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Quantum Computing Basics</h1>
          <p className="text-gray-600">Explore the revolutionary world of quantum technology</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-gray-600 mb-6">
              Learn about quantum computing, its principles, and how it will revolutionize technology. 
              This course explains complex concepts in simple terms.
            </p>
            <div className="space-y-3 mb-6">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{module}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Play className="h-4 w-4 mr-2" />
              Start Learning
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Why Quantum Computing?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Solve complex problems exponentially faster</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Revolutionary applications in AI and cryptography</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Future career opportunities in quantum field</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuantumComputing;
