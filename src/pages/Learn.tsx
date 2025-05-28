import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VoiceButton from '@/components/VoiceButton';
import { BookOpen, Play, Volume2, Star, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Learn = () => {
  const categories = [
    { name: "Basic Technology", icon: "💻", count: 12, color: "bg-blue-100 text-blue-800", path: "/learn/basic-technology" },
    { name: "Health & Wellness", icon: "🏥", count: 15, color: "bg-red-100 text-red-800", path: "/learn/health-wellness" },
    { name: "Financial Literacy", icon: "💰", count: 10, color: "bg-green-100 text-green-800", path: "/learn/financial-literacy" },
    { name: "Job Skills", icon: "💼", count: 18, color: "bg-purple-100 text-purple-800", path: "/learn/job-skills" },
    { name: "Education Basics", icon: "📚", count: 20, color: "bg-indigo-100 text-indigo-800", path: "/learn/education-basics" },
    { name: "Agriculture & Farming", icon: "🌱", count: 8, color: "bg-emerald-100 text-emerald-800", path: "/learn/agriculture" }
  ];

  const featuredLessons = [
    {
      title: "How to Use a Smartphone",
      description: "Learn the basics of using a mobile phone with voice guidance",
      duration: "15 min",
      difficulty: "Beginner",
      rating: 4.9,
      students: 12534,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Understanding Diabetes",
      description: "Essential information about diabetes management and prevention",
      duration: "20 min", 
      difficulty: "Beginner",
      rating: 4.8,
      students: 8921,
      image: "photo-1500673922987-e212871fec22"
    },
    {
      title: "Writing a Resume",
      description: "Step-by-step guide to creating your first resume",
      duration: "25 min",
      difficulty: "Intermediate", 
      rating: 4.7,
      students: 6543,
      image: "photo-1518495973542-4542c06a5843"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Learn Anything with AI</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Voice-guided lessons that adapt to your pace and language. No reading required.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <VoiceButton size="lg" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ask to Learn</h3>
            <p className="text-blue-100">Say "I want to learn about..." and AI will find the perfect lesson for you</p>
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Learning Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <div className={`${category.color} inline-block px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                    {category.count} lessons
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Link to={category.path}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Browse
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline">
                      <Volume2 className="h-4 w-4 mr-1" />
                      Listen
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Lessons */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Lessons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredLessons.map((lesson, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative h-48">
                  <img
                    src={`https://images.unsplash.com/${lesson.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={lesson.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{lesson.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {lesson.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {lesson.rating}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {lesson.students.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Preview Audio
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learn;
