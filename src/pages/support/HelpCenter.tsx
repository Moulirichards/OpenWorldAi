
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle, Book, MessageCircle } from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    { title: "Getting Started", icon: <Book className="h-6 w-6" />, count: 12 },
    { title: "Voice Features", icon: <MessageCircle className="h-6 w-6" />, count: 8 },
    { title: "Account Settings", icon: <HelpCircle className="h-6 w-6" />, count: 15 },
    { title: "Technical Issues", icon: <HelpCircle className="h-6 w-6" />, count: 10 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to your questions</p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search for help..." className="pl-10" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-blue-600 flex justify-center mb-3">
                {category.icon}
              </div>
              <h3 className="font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.count} articles</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
