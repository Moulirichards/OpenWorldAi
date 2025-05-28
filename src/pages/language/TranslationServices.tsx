
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const TranslationServices = () => {
  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese",
    "Chinese", "Japanese", "Korean", "Arabic", "Hindi", "Russian"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/language">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Language Settings
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Languages className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Translation Services</h1>
          <p className="text-gray-600">Translate content in real-time</p>
        </div>
        
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Instant Translation</h2>
          <div className="space-y-4">
            <textarea
              placeholder="Enter text to translate..."
              className="w-full p-3 border rounded-lg h-24 resize-none"
            />
            <div className="flex space-x-4">
              <select className="flex-1 p-3 border rounded-lg">
                <option>From: Auto-detect</option>
                {languages.map(lang => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
              <select className="flex-1 p-3 border rounded-lg">
                <option>To: English</option>
                {languages.map(lang => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            </div>
            <Button className="w-full">Translate</Button>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang, index) => (
            <Card key={index} className="p-4 text-center">
              <span className="font-medium">{lang}</span>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TranslationServices;
