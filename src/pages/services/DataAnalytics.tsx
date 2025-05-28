
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
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
          <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Data Analytics</h1>
          <p className="text-gray-600">Transform your data into actionable insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
            <p className="text-gray-600 mb-4">Advanced analytics and reporting solutions</p>
            <Button>Learn More</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">Forecast trends and make data-driven decisions</p>
            <Button>Learn More</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
