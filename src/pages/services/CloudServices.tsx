
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudServices = () => {
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
          <Cloud className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cloud Infrastructure</h1>
          <p className="text-xl text-gray-600 mb-8">Scalable cloud solutions for modern businesses</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AWS Solutions", desc: "Complete Amazon Web Services implementation" },
              { title: "Azure Platform", desc: "Microsoft Azure cloud infrastructure" },
              { title: "Google Cloud", desc: "GCP services and deployment" }
            ].map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Button variant="outline">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CloudServices;
