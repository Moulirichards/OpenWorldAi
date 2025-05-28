
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialLiteracy = () => {
  const lessons = [
    { title: "Banking Basics", duration: "15 min", level: "Beginner" },
    { title: "Saving Money", duration: "18 min", level: "Beginner" },
    { title: "Understanding Credit", duration: "25 min", level: "Intermediate" },
    { title: "Investment Fundamentals", duration: "30 min", level: "Advanced" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/learn">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learn
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Financial Literacy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.duration} • {lesson.level}</p>
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

export default FinancialLiteracy;
