
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone, MapPin, Edit } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">User Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-600">AI Learner</p>
            <Button className="mt-4" variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Photo
            </Button>
          </Card>
          
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input value="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input value="john.doe@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input value="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Input value="San Francisco, CA" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
