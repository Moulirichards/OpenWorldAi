
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    { title: "Digital Literacy Workshop", date: "March 15, 2024", location: "Online", type: "Workshop" },
    { title: "Job Fair 2024", date: "March 20, 2024", location: "Community Center", type: "Event" },
    { title: "Health Tech Seminar", date: "March 25, 2024", location: "Online", type: "Seminar" },
    { title: "Farming Innovation Meet", date: "April 1, 2024", location: "Agriculture Hall", type: "Meetup" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Community Events</h1>
          <p className="text-gray-600">Join upcoming workshops and meetups</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  {event.type}
                </span>
                <Button>Register</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
