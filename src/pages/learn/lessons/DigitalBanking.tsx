
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalBanking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/financial-literacy">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Financial Literacy
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <CreditCard className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Digital Banking</h1>
          <p className="text-gray-600">Master online banking and digital payments</p>
        </div>
        
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Online banking setup</li>
            <li>• Mobile banking apps</li>
            <li>• Digital payment methods</li>
            <li>• Security best practices</li>
          </ul>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-2" />
            Start Banking Course
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalBanking;
