import React from 'react';
import { MapPin, Clock, Users, Globe, Briefcase, Heart, ArrowRight, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VoiceButton from '@/components/VoiceButton';

const Careers = () => {
  const jobOpenings = [
    {
      title: "AI Solutions Engineer",
      location: "Remote (Global)",
      type: "Full-time",
      department: "Engineering",
      description: "Build AI solutions that break down language barriers and make technology accessible worldwide.",
      requirements: ["3+ years in AI/ML", "Experience with voice technologies", "Passion for accessibility"]
    },
    {
      title: "Voice Interface Designer",
      location: "San Francisco, CA",
      type: "Full-time", 
      department: "Design",
      description: "Design voice-first interfaces that work for users regardless of literacy level or technical background.",
      requirements: ["UX/UI design experience", "Voice interface knowledge", "Accessibility expertise"]
    },
    {
      title: "Global DevOps Engineer",
      location: "London, UK",
      type: "Full-time",
      department: "Infrastructure",
      description: "Scale our global infrastructure to serve millions of users across different languages and regions.",
      requirements: ["DevOps experience", "Cloud platforms", "Global deployment knowledge"]
    },
    {
      title: "Multilingual Content Specialist",
      location: "Mumbai, India",
      type: "Full-time",
      department: "Content",
      description: "Create and localize educational content for diverse global audiences in multiple languages.",
      requirements: ["Multilingual abilities", "Content creation", "Cultural sensitivity"]
    },
    {
      title: "Data Privacy Specialist",
      location: "Berlin, Germany",
      type: "Full-time",
      department: "Legal/Compliance",
      description: "Ensure our AI systems comply with global privacy regulations while serving diverse populations.",
      requirements: ["Legal background", "Privacy regulations", "International law knowledge"]
    },
    {
      title: "Community Outreach Manager",
      location: "São Paulo, Brazil",
      type: "Full-time",
      department: "Community",
      description: "Build partnerships with local organizations to bring AI education to underserved communities.",
      requirements: ["Community engagement", "Partnership building", "Local market knowledge"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Global Impact",
      description: "Work on technology that changes lives worldwide",
      color: "bg-blue-600"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Mission-Driven",
      description: "Be part of making AI accessible to everyone",
      color: "bg-red-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Diverse Team",
      description: "Collaborate with talent from 50+ countries",
      color: "bg-green-600"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development",
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <VoiceButton size="lg" className="mb-4" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Join Our Global Mission</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Help us build AI solutions that empower everyone, everywhere. 
            Be part of a team that's breaking down barriers and creating opportunities for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold border-0">
              <Play className="h-5 w-5 mr-2" />
              Listen to Our Story
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Open World AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just building technology – we're creating bridges between people, cultures, and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className={`p-4 rounded-full ${benefit.color} mx-auto mb-4 w-fit`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of innovators, dreamers, and changemakers from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in the power of diversity, inclusion, and accessibility. Our team spans across continents, 
                cultures, and backgrounds, united by a common goal: making AI accessible to everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accessibility First</h3>
                    <p className="text-gray-600">Every decision considers users of all abilities and backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Perspective</h3>
                    <p className="text-gray-600">We think globally and act locally in every market</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team's growth and development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">50+ Countries</h3>
              <p className="text-gray-600 mb-6">Our team represents the diversity of our global user base</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple, inclusive, and accessible to all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply", description: "Submit your application online or via voice message" },
              { step: "2", title: "Screen", description: "Quick phone or video call to get to know you" },
              { step: "3", title: "Interview", description: "In-depth discussion about your experience and goals" },
              { step: "4", title: "Join", description: "Welcome to the team! Start your global impact journey" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Change the World?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in our mission to make AI accessible to everyone, everywhere. 
            Your skills can help break down barriers and create opportunities for millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold border-0">
              Browse All Positions
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
