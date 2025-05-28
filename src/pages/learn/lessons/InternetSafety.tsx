
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternetSafety = () => {
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
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Internet Safety</h1>
          <p className="text-gray-600">Learn how to stay safe while browsing the internet and using online services.</p>
        </div>
        
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">This comprehensive internet safety course is being developed.</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Play className="h-4 w-4 mr-2" />
            Notify When Ready
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default InternetSafety;
