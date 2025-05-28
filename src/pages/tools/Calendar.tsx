
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2024-03-15', title: 'Doctor Appointment' },
    { date: '2024-03-20', title: 'Job Interview' },
    { date: '2024-03-25', title: 'Community Meeting' }
  ]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <CalendarIcon className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Calendar</h1>
          <p className="text-gray-600">Keep track of important dates</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="flex justify-between items-center mb-6">
              <Button onClick={previousMonth} variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-bold">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button onClick={nextMonth} variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center font-semibold text-gray-600">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }, (_, i) => (
                <div key={`empty-${i}`} className="p-2"></div>
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => (
                <div key={i + 1} className="p-2 text-center hover:bg-gray-100 rounded cursor-pointer">
                  {i + 1}
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-sm text-gray-600">{event.date}</div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Add Event</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
