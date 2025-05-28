
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITSupport = () => {
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
          <Settings className="h-16 w-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">IT Support</h1>
          <p className="text-gray-600">24/7 technical support for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Remote Support</h3>
            <p className="text-gray-600 mb-4">Get help instantly with remote desktop support</p>
            <Button className="bg-orange-600 hover:bg-orange-700">Get Support</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">On-Site Service</h3>
            <p className="text-gray-600 mb-4">Professional technicians at your location</p>
            <Button className="bg-orange-600 hover:bg-orange-700">Schedule Visit</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITSupport;
