
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Users } from 'lucide-react';

const Forum = () => {
  const topics = [
    { title: "Getting Started with Technology", replies: 45, author: "TechHelper" },
    { title: "Email Safety Tips", replies: 23, author: "SafetyExpert" },
    { title: "Job Search Strategies", replies: 67, author: "CareerCoach" },
    { title: "Health Apps Discussion", replies: 12, author: "HealthGuru" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
          <p className="text-gray-600">Connect with learners worldwide</p>
        </div>
        
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{topic.title}</h3>
                  <p className="text-gray-600">by {topic.author}</p>
                </div>
                <div className="text-center">
                  <MessageSquare className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">{topic.replies}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="mr-4">Start New Topic</Button>
          <Button variant="outline">Browse Categories</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
