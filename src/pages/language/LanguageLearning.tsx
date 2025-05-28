
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Globe, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const LanguageLearning = () => {
  const courses = [
    { language: "English", level: "Beginner", lessons: 24 },
    { language: "Spanish", level: "Intermediate", lessons: 32 },
    { language: "French", level: "Beginner", lessons: 20 },
    { language: "German", level: "Advanced", lessons: 18 },
    { language: "Mandarin", level: "Beginner", lessons: 28 },
    { language: "Arabic", level: "Intermediate", lessons: 22 }
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
          <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Language Learning</h1>
          <p className="text-gray-600">Learn new languages with interactive courses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-xl mb-2">{course.language}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className={`px-2 py-1 text-xs rounded ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
                <span className="text-gray-600">{course.lessons} lessons</span>
              </div>
              <Button className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Learning
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LanguageLearning;
