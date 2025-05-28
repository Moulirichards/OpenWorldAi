
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningProgress = () => {
  const progress = [
    { course: "Computer Basics", completed: 75, total: 100 },
    { course: "Email Basics", completed: 100, total: 100 },
    { course: "Internet Safety", completed: 45, total: 100 },
    { course: "Social Media", completed: 20, total: 100 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/profile">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Learning Progress</h1>
          <p className="text-gray-600">Track your learning journey</p>
        </div>
        
        <div className="space-y-4">
          {progress.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{item.course}</h3>
                <span className="text-sm text-gray-600">{item.completed}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all"
                  style={{ width: `${item.completed}%` }}
                ></div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">Continue Learning</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningProgress;
