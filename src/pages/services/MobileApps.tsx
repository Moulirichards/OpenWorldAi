
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/services">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </Link>
        
        <div className="text-center">
          <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Mobile App Development</h1>
          <p className="text-xl text-gray-600 mb-8">Cross-platform mobile solutions for iOS and Android</p>
          
          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Mobile Services</h2>
            <ul className="text-left space-y-2 text-gray-600">
              <li>• Native iOS & Android Development</li>
              <li>• React Native Cross-platform Apps</li>
              <li>• Flutter Development</li>
              <li>• App Store Optimization</li>
              <li>• Mobile UI/UX Design</li>
            </ul>
            <Button className="mt-6 bg-green-600 hover:bg-green-700">
              Start Your Project
            </Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileApps;
