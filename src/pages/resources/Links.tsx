
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Globe } from 'lucide-react';

const Links = () => {
  const categories = [
    {
      title: "Government Services",
      links: [
        { name: "Social Security Administration", url: "#", desc: "Manage your social security benefits" },
        { name: "IRS Tax Information", url: "#", desc: "File taxes and get tax information" },
        { name: "Healthcare.gov", url: "#", desc: "Find health insurance options" }
      ]
    },
    {
      title: "Educational Resources",
      links: [
        { name: "Khan Academy", url: "#", desc: "Free online courses" },
        { name: "Coursera", url: "#", desc: "University-level courses" },
        { name: "edX", url: "#", desc: "Professional education" }
      ]
    },
    {
      title: "Job Search",
      links: [
        { name: "Indeed", url: "#", desc: "Job search engine" },
        { name: "LinkedIn", url: "#", desc: "Professional networking" },
        { name: "CareerBuilder", url: "#", desc: "Career opportunities" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Helpful Links</h1>
          <p className="text-gray-600">Curated resources from across the web</p>
        </div>
        
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.links.map((link, linkIndex) => (
                  <Card key={linkIndex} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{link.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{link.desc}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Links;
