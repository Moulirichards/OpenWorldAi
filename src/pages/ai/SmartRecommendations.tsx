
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartRecommendations = () => {
  const recommendations = [
    { category: "Learning", item: "Computer Basics Course", reason: "Based on your recent searches" },
    { category: "Health", item: "Daily Exercise Reminder", reason: "Helps maintain fitness goals" },
    { category: "Finance", item: "Budget Tracking App", reason: "Popular with similar users" },
    { category: "Career", item: "Resume Writing Workshop", reason: "Matches your interests" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/assistant">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to AI Assistant
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Lightbulb className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Smart Recommendations</h1>
          <p className="text-gray-600">Personalized suggestions just for you</p>
        </div>
        
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{rec.item}</h3>
                  <p className="text-gray-600">{rec.reason}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                    {rec.category}
                  </span>
                </div>
                <Button>Try Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartRecommendations;
