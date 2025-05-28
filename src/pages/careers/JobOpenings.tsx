
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MapPin, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobOpenings = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150K - $200K",
      posted: "2 days ago"
    },
    {
      title: "Product Manager",
      location: "London, UK",
      type: "Full-time",
      salary: "$120K - $160K",
      posted: "1 week ago"
    },
    {
      title: "UX Designer",
      location: "Remote",
      type: "Full-time",
      salary: "$100K - $140K",
      posted: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/careers">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Current Job Openings</h1>
        
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{job.posted}</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobOpenings;
