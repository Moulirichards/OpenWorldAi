
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerBasics = () => {
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
        
        <div className="text-center mb-8">
          <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Computer Basics</h1>
          <p className="text-gray-600">Learn fundamental computer skills from the ground up</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Understanding Hardware",
            "Using Mouse and Keyboard",
            "File Management",
            "Internet Basics"
          ].map((lesson, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-3">{lesson}</h3>
              <Button className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Lesson
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComputerBasics;
