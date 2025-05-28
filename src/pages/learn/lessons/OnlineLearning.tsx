
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnlineLearning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/education-basics">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Education Basics
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <GraduationCap className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Online Learning</h1>
          <p className="text-gray-600">Discover effective online learning strategies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Finding Courses",
            "Study Techniques",
            "Time Management",
            "Digital Tools"
          ].map((lesson, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-3">{lesson}</h3>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
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

export default OnlineLearning;
