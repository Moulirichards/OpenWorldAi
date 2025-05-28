
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

const Downloads = () => {
  const resources = [
    { title: "Computer Basics Guide", type: "PDF", size: "2.5 MB" },
    { title: "Internet Safety Checklist", type: "PDF", size: "1.2 MB" },
    { title: "Job Application Template", type: "DOC", size: "0.8 MB" },
    { title: "Health Tracking Worksheet", type: "PDF", size: "1.5 MB" },
    { title: "Financial Planning Tool", type: "XLS", size: "3.1 MB" },
    { title: "Agriculture Calendar", type: "PDF", size: "2.0 MB" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Download className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Downloads</h1>
          <p className="text-gray-600">Free resources and templates to help you learn</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-bold">{resource.title}</h3>
                    <p className="text-gray-600 text-sm">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
