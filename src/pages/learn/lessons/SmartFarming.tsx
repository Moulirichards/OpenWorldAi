
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartFarming = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/agriculture">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Agriculture
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Tractor className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Smart Farming</h1>
          <p className="text-gray-600">Learn modern farming techniques and technology</p>
        </div>
        
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• IoT sensors for farming</li>
            <li>• Weather monitoring</li>
            <li>• Crop management apps</li>
            <li>• Market price tracking</li>
          </ul>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-2" />
            Start Farming Course
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SmartFarming;
