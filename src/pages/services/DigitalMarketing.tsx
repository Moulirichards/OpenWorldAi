
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/services">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Digital Marketing</h1>
          <p className="text-gray-600">Grow your business with digital marketing strategies</p>
        </div>
        
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Our Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold">SEO Optimization</h3>
              <h3 className="font-bold">Social Media Marketing</h3>
              <h3 className="font-bold">Content Creation</h3>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Email Campaigns</h3>
              <h3 className="font-bold">Pay-Per-Click Ads</h3>
              <h3 className="font-bold">Analytics & Reporting</h3>
            </div>
          </div>
          <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
            Start Marketing Campaign
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
