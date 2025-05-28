
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthTracking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/health-wellness">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Health & Wellness
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Health Tracking</h1>
          <p className="text-gray-600">Learn to monitor and track your health digitally</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Fitness Apps",
            "Medication Reminders",
            "Health Records",
            "Doctor Appointments"
          ].map((lesson, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-3">{lesson}</h3>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                <Play className="h-4 w-4 mr-2" />
                Start Lesson
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthTracking;
