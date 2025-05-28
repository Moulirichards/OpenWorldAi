
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Play, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobApplications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/learn/job-skills">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Job Skills
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Briefcase className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Job Applications</h1>
          <p className="text-gray-600">Master the art of applying for jobs online</p>
        </div>
        
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Creating online profiles</li>
            <li>• Writing cover letters</li>
            <li>• Interview preparation</li>
            <li>• Following up on applications</li>
          </ul>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Play className="h-4 w-4 mr-2" />
            Start Job Course
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default JobApplications;
