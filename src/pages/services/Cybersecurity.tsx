
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
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
          <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cybersecurity</h1>
          <p className="text-gray-600">Protect your business from digital threats</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Security Audits",
            "Threat Assessment",
            "Employee Training",
            "Incident Response",
            "Compliance",
            "Monitoring"
          ].map((service, index) => (
            <Card key={index} className="p-6 text-center">
              <h3 className="font-bold text-lg mb-3">{service}</h3>
              <Button variant="outline">Get Quote</Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
