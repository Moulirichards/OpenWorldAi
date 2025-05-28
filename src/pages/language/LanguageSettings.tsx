
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, Check } from 'lucide-react';

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', speakers: '1.5B' },
    { code: 'es', name: 'Español', flag: '🇪🇸', speakers: '500M' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', speakers: '280M' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳', speakers: '600M' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', speakers: '400M' },
    { code: 'zh', name: '中文', flag: '🇨🇳', speakers: '1.1B' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', speakers: '260M' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', speakers: '260M' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', speakers: '125M' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', speakers: '100M' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Language Settings</h1>
        
        <Card className="p-6 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold">Choose Your Language</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedLanguage === lang.code 
                    ? 'bg-blue-50 border-blue-500' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <h3 className="font-bold">{lang.name}</h3>
                      <p className="text-sm text-gray-600">{lang.speakers} speakers</p>
                    </div>
                  </div>
                  {selectedLanguage === lang.code && (
                    <Check className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button className="px-8">
              Save Language Settings
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-3">Voice Recognition</h3>
            <p className="text-gray-600 mb-4">AI understands your selected language perfectly</p>
            <Button variant="outline" className="w-full">Test Voice</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-3">Translation</h3>
            <p className="text-gray-600 mb-4">Instant translation to any supported language</p>
            <Button variant="outline" className="w-full">Try Translation</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LanguageSettings;
