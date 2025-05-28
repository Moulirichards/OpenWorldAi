
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/profile">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <SettingsIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Settings</h1>
          <p className="text-gray-600">Customize your experience</p>
        </div>
        
        <div className="space-y-6">
          {[
            { title: "Account Settings", desc: "Manage your account information" },
            { title: "Privacy Settings", desc: "Control your privacy preferences" },
            { title: "Notification Settings", desc: "Manage alerts and notifications" },
            { title: "Language Preferences", desc: "Choose your preferred language" },
            { title: "Accessibility Options", desc: "Customize accessibility features" },
            { title: "Data & Storage", desc: "Manage your data and storage" }
          ].map((setting, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{setting.title}</h3>
                  <p className="text-gray-600">{setting.desc}</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
