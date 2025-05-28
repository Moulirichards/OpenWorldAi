
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaBasics = () => {
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
          <Share2 className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Social Media Basics</h1>
          <p className="text-gray-600">Learn to use social media safely and effectively</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Creating Accounts",
            "Privacy Settings",
            "Safe Posting",
            "Understanding Algorithms"
          ].map((lesson, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-3">{lesson}</h3>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
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

export default SocialMediaBasics;
